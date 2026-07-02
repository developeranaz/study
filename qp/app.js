/* ============================================================
   Civil Engineering Q-Bank  –  app.js
   Cookie-based answer persistence
   ============================================================ */

'use strict';

// ── Subject icons ──────────────────────────────────────────────
const SUBJECT_ICONS = {
  'Surveying':                       '🗺️',
  'Building Materials':              '🧱',
  'Construction Technology':         '🏗️',
  'Engineering Drawing':             '✏️',
  'Structural Engineering':          '🏛️',
  'Environmental Engineering':       '🌿',
  'Transportation Engineering':      '🛣️',
  'Irrigation Engineering':          '💧',
  'Estimation, Costing & Valuation': '💰',
  'Engineering Mechanics':           '⚙️',
  'Strength of Materials':           '🔩',
  'Geotechnical Engineering':        '🪨',
  'Units and Measurements':          '📏',
  'Autocad':                         '🖥️',
  'Others':                          '📚',
};

// ── Cookie helpers ─────────────────────────────────────────────
// We store ALL answers in a single cookie as a compact JSON string.
// Cookie expiry: 1 year, so closing/restarting the browser keeps data.

const COOKIE_KEY = 'civ_qbank_answers';
const COOKIE_DAYS = 365;

function cookieSave(data) {
  const str = JSON.stringify(data);
  const expires = new Date(Date.now() + COOKIE_DAYS * 86400000).toUTCString();
  // Split into chunks if > 3900 bytes (cookie size limit ~4096)
  const chunks = chunkString(str, 3900);
  // Clear old numbered cookies
  for (let i = 0; i < 30; i++) {
    document.cookie = `${COOKIE_KEY}_${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
  document.cookie = `${COOKIE_KEY}_count=${chunks.length}; expires=${expires}; path=/`;
  chunks.forEach((chunk, i) => {
    document.cookie = `${COOKIE_KEY}_${i}=${encodeURIComponent(chunk)}; expires=${expires}; path=/`;
  });
}

function cookieLoad() {
  const all = parseCookies();
  const count = parseInt(all[`${COOKIE_KEY}_count`] || '0', 10);
  if (!count) return {};
  let str = '';
  for (let i = 0; i < count; i++) {
    str += decodeURIComponent(all[`${COOKIE_KEY}_${i}`] || '');
  }
  try { return JSON.parse(str); } catch (e) { return {}; }
}

function cookieClear() {
  const expires = 'Thu, 01 Jan 1970 00:00:00 UTC';
  document.cookie = `${COOKIE_KEY}_count=; expires=${expires}; path=/`;
  for (let i = 0; i < 30; i++) {
    document.cookie = `${COOKIE_KEY}_${i}=; expires=${expires}; path=/`;
  }
}

function parseCookies() {
  return Object.fromEntries(
    document.cookie.split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
}

function chunkString(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) chunks.push(str.slice(i, i + size));
  return chunks;
}

// ── State ──────────────────────────────────────────────────────
let QUESTIONS   = {};          // { SubjectName: [{question_number, question, options}] }
let answers     = {};          // { 'SubjectName||qNum': 'A'|'B'|'C'|'D' }
let activeSubj  = null;

// ── DOM refs ───────────────────────────────────────────────────
const subjectList      = document.getElementById('subject-list');
const questionList     = document.getElementById('question-list');
const landing          = document.getElementById('landing');
const subjectHeader    = document.getElementById('subject-header');
const subjectTitle     = document.getElementById('subject-title');
const subjectCount     = document.getElementById('subject-count');
const subjectProgBar   = document.getElementById('subject-progress-bar');
const subjectProgLabel = document.getElementById('subject-progress-label');
const progressLabel    = document.getElementById('progress-label');
const overallStats     = document.getElementById('overall-stats');
const toastEl          = document.getElementById('toast');
const clearBtn         = document.getElementById('clear-btn');
const modalOverlay     = document.getElementById('modal-overlay');
const modalCancel      = document.getElementById('modal-cancel');
const modalConfirm     = document.getElementById('modal-confirm');

// ── Answer key ─────────────────────────────────────────────────
function answerKey(subj, qNum) {
  return `${subj}||${qNum}`;
}

// ── Render sidebar ─────────────────────────────────────────────
function renderSidebar() {
  subjectList.innerHTML = '';
  Object.keys(QUESTIONS).forEach(subj => {
    const total   = QUESTIONS[subj].length;
    const done    = countAnswered(subj);
    const pct     = total ? Math.round(done / total * 100) : 0;

    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.dataset.subj = subj;
    if (subj === activeSubj) btn.classList.add('active');

    btn.innerHTML = `
      <span class="subj-btn-left">
        <span class="subj-icon">${SUBJECT_ICONS[subj] || '📋'}</span>
        <span class="subj-name">${subj}</span>
      </span>
      <span class="subj-badge">${done}/${total}</span>
    `;
    btn.addEventListener('click', () => loadSubject(subj));

    li.appendChild(btn);

    // tiny progress bar
    const barWrap = document.createElement('div');
    barWrap.className = 'subj-mini-bar-wrap';
    const bar = document.createElement('div');
    bar.className = 'subj-mini-bar';
    bar.style.width = pct + '%';
    barWrap.appendChild(bar);
    li.appendChild(barWrap);

    subjectList.appendChild(li);
  });
}

// ── Count answered for a subject ───────────────────────────────
function countAnswered(subj) {
  return (QUESTIONS[subj] || []).filter(q => answers[answerKey(subj, q.question_number)]).length;
}

function totalAnswered() {
  return Object.keys(answers).length;
}

function totalQuestions() {
  return Object.values(QUESTIONS).reduce((s, a) => s + a.length, 0);
}

// ── Header progress ────────────────────────────────────────────
function updateGlobalProgress() {
  progressLabel.textContent = `${totalAnswered()} / ${totalQuestions()} answered`;
}

// ── Load subject ───────────────────────────────────────────────
function loadSubject(subj) {
  activeSubj = subj;
  landing.classList.add('hidden');
  subjectHeader.classList.remove('hidden');
  subjectTitle.textContent = SUBJECT_ICONS[subj] + '  ' + subj;

  renderSidebar();          // update active state
  renderQuestions(subj);
  updateSubjectProgress(subj);
  updateGlobalProgress();
}

// ── Subject progress bar ───────────────────────────────────────
function updateSubjectProgress(subj) {
  const total = QUESTIONS[subj].length;
  const done  = countAnswered(subj);
  const pct   = total ? Math.round(done / total * 100) : 0;
  subjectCount.textContent = `${total} questions`;
  subjectProgBar.style.width = pct + '%';
  subjectProgLabel.textContent = `${done} / ${total} answered`;
}

// ── Render question list ───────────────────────────────────────
function renderQuestions(subj) {
  questionList.innerHTML = '';
  const qs = QUESTIONS[subj] || [];

  qs.forEach(q => {
    const key        = answerKey(subj, q.question_number);
    const saved      = answers[key] || null;
    const card       = document.createElement('div');
    card.className   = 'question-card' + (saved ? ' answered' : '');
    card.id          = `card-${subj.replace(/\s+/g,'_')}-${q.question_number}`;

    // Options HTML
    const optsHTML = ['A', 'B', 'C', 'D'].map(letter => {
      const text = q.options[letter];
      const sel  = saved === letter ? ' selected' : '';
      return `
        <button class="option-btn${sel}" data-letter="${letter}"
                data-qnum="${q.question_number}" data-subj="${subj}">
          <span class="opt-letter">${letter}</span>
          <span class="opt-text">${escapeHtml(text)}</span>
        </button>
      `;
    }).join('');

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">Q${q.question_number}</span>
        <span class="q-text">${escapeHtml(q.question)}</span>
      </div>
      <div class="options-grid">${optsHTML}</div>
      ${saved ? `<div class="clear-answer-wrap">
        <button class="clear-answer-btn" data-qnum="${q.question_number}" data-subj="${subj}">
          ✕ Clear answer
        </button>
      </div>` : ''}
    `;

    questionList.appendChild(card);
  });

  // Delegate click events on option buttons
  questionList.addEventListener('click', onOptionClick, { once: false });
}

// ── Option click handler ───────────────────────────────────────
function onOptionClick(e) {
  // Option button
  const optBtn = e.target.closest('.option-btn');
  if (optBtn) {
    const subj  = optBtn.dataset.subj;
    const qNum  = parseInt(optBtn.dataset.qnum, 10);
    const letter = optBtn.dataset.letter;
    saveAnswer(subj, qNum, letter);
    return;
  }

  // Clear-answer button
  const clearBtn2 = e.target.closest('.clear-answer-btn');
  if (clearBtn2) {
    const subj = clearBtn2.dataset.subj;
    const qNum = parseInt(clearBtn2.dataset.qnum, 10);
    clearAnswer(subj, qNum);
  }
}

// ── Save an answer ─────────────────────────────────────────────
function saveAnswer(subj, qNum, letter) {
  const key = answerKey(subj, qNum);
  const prev = answers[key];

  // Toggle off same answer
  if (prev === letter) {
    clearAnswer(subj, qNum);
    return;
  }

  answers[key] = letter;
  cookieSave(answers);

  // Update card UI without full re-render
  const card = document.getElementById(`card-${subj.replace(/\s+/g,'_')}-${qNum}`);
  if (card) {
    card.classList.add('answered');

    // Update option buttons
    card.querySelectorAll('.option-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.letter === letter);
    });

    // Add/update clear button
    let clearWrap = card.querySelector('.clear-answer-wrap');
    if (!clearWrap) {
      clearWrap = document.createElement('div');
      clearWrap.className = 'clear-answer-wrap';
      card.appendChild(clearWrap);
    }
    clearWrap.innerHTML = `
      <button class="clear-answer-btn" data-qnum="${qNum}" data-subj="${subj}">
        ✕ Clear answer
      </button>
    `;
  }

  updateSubjectProgress(subj);
  updateGlobalProgress();
  renderSidebar();
  showToast('Answer saved ✓');
}

// ── Clear one answer ───────────────────────────────────────────
function clearAnswer(subj, qNum) {
  const key = answerKey(subj, qNum);
  delete answers[key];
  cookieSave(answers);

  const card = document.getElementById(`card-${subj.replace(/\s+/g,'_')}-${qNum}`);
  if (card) {
    card.classList.remove('answered');
    card.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    const cw = card.querySelector('.clear-answer-wrap');
    if (cw) cw.remove();
  }

  updateSubjectProgress(subj);
  updateGlobalProgress();
  renderSidebar();
}

// ── Render landing stats ───────────────────────────────────────
function renderLandingStats() {
  const total  = totalQuestions();
  const done   = totalAnswered();
  const subjs  = Object.keys(QUESTIONS).length;

  overallStats.innerHTML = `
    <div class="stat-card">
      <div class="stat-num">${total}</div>
      <div class="stat-label">Total Questions</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${subjs}</div>
      <div class="stat-label">Subjects</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${done}</div>
      <div class="stat-label">Answered</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${total - done}</div>
      <div class="stat-label">Remaining</div>
    </div>
  `;
}

// ── Toast ──────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1600);
}

// ── HTML escaping (prevent XSS + render math-like text safely) ─
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Clear all modal ────────────────────────────────────────────
clearBtn.addEventListener('click', () => modalOverlay.classList.remove('hidden'));
modalCancel.addEventListener('click', () => modalOverlay.classList.add('hidden'));
modalConfirm.addEventListener('click', () => {
  cookieClear();
  answers = {};
  modalOverlay.classList.add('hidden');
  updateGlobalProgress();
  renderSidebar();
  renderLandingStats();
  if (activeSubj) {
    updateSubjectProgress(activeSubj);
    renderQuestions(activeSubj);
  }
  showToast('All progress cleared');
});
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
});

// ── Bootstrap ──────────────────────────────────────────────────
async function init() {
  // Load JSON
  try {
    const res  = await fetch('questions.json');
    QUESTIONS  = await res.json();
  } catch (err) {
    document.body.innerHTML = `
      <div style="padding:60px;text-align:center;font-family:sans-serif;color:#c0392b">
        <h2>⚠️ Could not load questions.json</h2>
        <p style="margin-top:10px;color:#666">Make sure questions.json is in the same folder as index.html.</p>
      </div>`;
    return;
  }

  // Load saved answers from cookies
  answers = cookieLoad();

  // Render
  renderSidebar();
  updateGlobalProgress();
  renderLandingStats();
}

init();
