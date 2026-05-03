---
name: lecture-notes-to-study-notes
description: >
  Convert raw lecture/PPT notes (in markdown, often with incomplete sentences, mnemonic codes, fragmented bullet points, and missing image context) into comprehensive, exam-ready study notes with organized tables, complete definitions, key numbers, and quick revision sections. Use this skill whenever a student uploads lecture slides, PPT-converted markdown files, or rough class notes and asks for detailed/clean notes, summary, or revision material. Also triggers when user says "create notes from", "make detailed notes", "clean up my notes", "organize my syllabus notes", or uploads multiple .md/.txt files that appear to be class material.
---

# Lecture Notes → Study Notes Skill

## When to Use
- User uploads .md/.txt/.pdf files that are raw lecture/PPT notes
- Notes have incomplete sentences, image placeholders, mnemonics, shorthand
- User wants "detailed notes", "organized notes", "revision material"

## Input Recognition

Raw lecture notes typically have:
- `==> picture [...] intentionally omitted <==` placeholders
- Incomplete sentences ("Strength along is important for column &")
- Mnemonic strings (e.g., "SOAP MCQ Finish", "DoGLLi...")
- Mixed bold/plain with no hierarchy
- Numbers without context (e.g., "30 RPM" floating alone)

## Process

### Step 1 — Read ALL files first
Read every uploaded file before writing anything. Map the full syllabus structure.

### Step 2 — Reconstruct missing context
For image placeholders:
- Infer from surrounding text what the image likely showed
- Add description in brackets: `[Diagram: plug and feather wedge cross-section]`
- Do NOT fabricate technical values — only reconstruct when logically obvious

For incomplete sentences:
- Complete them using domain knowledge
- Mark reconstructed parts if uncertain: *(inferred)*

For mnemonics:
- Decode and expand: state the mnemonic, then list what each letter stands for

### Step 3 — Organize content

Use this hierarchy:
```
# PART A / B / C (major topic)
## Chapter heading
### Sub-topic
Tables for: comparisons, specifications, classifications
Inline for: definitions, processes, sequential steps
```

**Always include:**
- Complete definitions (not just key terms)
- All numeric values in context (not floating)
- Units on every measurement
- IS codes with year and description
- Comparisons as tables

### Step 4 — Add Revision Aids

At end of each major section:
- **Quick Numbers Table** — all specs, values, limits in one place
- **Comparison Tables** — when two similar things exist (e.g., dynamite vs gunpowder)
- **Mnemonic Decoder** — original mnemonic + expanded meaning
- **Classification Summary** — all classification systems for a topic together

### Step 5 — Output Format

Output as single `.md` file:
- Filename: `[subject]_detailed_notes.md`
- Structure: Table of Contents → Part A → Part B → ... → Quick Revision
- Use tables for data-heavy content
- Use numbered lists for processes/steps
- Use paragraph only for definitions and explanations

## Quality Checks

Before finalizing, verify:
- [ ] Every numeric value has units
- [ ] Every IS code has year and description  
- [ ] No floating data (all values in context)
- [ ] All mnemonics decoded
- [ ] Sequential processes are numbered steps
- [ ] Comparisons are in table form
- [ ] Quick revision numbers table present

## Output Length

Expect output to be 3–6× longer than input — this is intentional.
Raw lecture notes are compressed; study notes must be complete.

## Subject Domains Supported

Works well for:
- Civil Engineering (Building Materials, Structures, Geotechnical)
- Mechanical Engineering (Thermodynamics, Manufacturing)
- Electrical Engineering (Circuits, Machines)
- Chemistry, Biology, any factual/technical subject

For non-technical subjects (history, literature), apply same structure but replace
"specifications/IS codes" guidance with "dates/citations/key quotes" guidance.
