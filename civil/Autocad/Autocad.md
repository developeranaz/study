# AutoCAD — Detailed Study Notes
**Subject: Computer Aided Drafting (CAD) | Source: Lecture series by Surya M Suresh (Parts 1–4)**

---

## Table of Contents
- [Part A — Introduction to CAD & AutoCAD](#part-a--introduction-to-cad--autocad)
- [Part B — CAD Hardware](#part-b--cad-hardware)
- [Part C — Computer System Architecture](#part-c--computer-system-architecture)
- [Part D — AutoCAD Graphical User Interface (GUI)](#part-d--autocad-graphical-user-interface-gui)
- [Part E — Basic Terms in CAD](#part-e--basic-terms-in-cad)
- [Part F — Coordinate Entry Methods](#part-f--coordinate-entry-methods)
- [Part G — Keyboard Shortcuts & Function Keys](#part-g--keyboard-shortcuts--function-keys)
- [Part H — Basic AutoCAD Commands](#part-h--basic-autocad-commands)
- [Part I — File Formats, Workspaces & Units](#part-i--file-formats-workspaces--units)
- [Part J — Annotation, Block, Draft & Inquiry Tools](#part-j--annotation-block-draft--inquiry-tools)
- [Quick Revision](#quick-revision)

---

## Part A — Introduction to CAD & AutoCAD

### What is CAD?
**Computer Aided Design (CAD)** means design and drafting carried out with the help of a computer.
- **Design** — the process of creating a real, usable product starting from an idea.
- **Drafting** — the production of the drawings used to document and communicate that design.
- CAD can be used to create both **2D and 3D computer models**.
- A CAD drawing file is essentially **numeric data stored in binary form** on a disk.

### What is AutoCAD?
- AutoCAD is the leading **Computer Aided Design and Drafting (CADD)** program in the world.
- It was originally introduced in **December 1982**.
- Since then, it has grown in sales and functionality to become the **standard PC-based CAD program** — the benchmark against which all other similar programs compete and are judged.
- AutoCAD has consistently kept pace with developments in the computer industry, evolving from a **command-line driven, DOS-based program** into a **fully compatible Windows application**.

### Hardware and Software — Overview
A computer system (and a CADD system is no exception) has two parts:

| Component | Description |
|---|---|
| **Hardware** | The physical components of the computer, e.g. system unit, monitor, plotter |
| **Software** | The program(s) that determine what applications the system can run |

**Categories of computers (by hardware/capability):**
1. Mainframe computers
2. Minicomputers
3. Microcomputers — e.g. Personal Computers (PCs)

---

## Part B — CAD Hardware

The hardware used in a CADD system is grouped into six categories:

| # | Hardware Category | Examples / Notes |
|---|---|---|
| 1 | System Unit | CPU, Memory, Hard disk, CD-ROM, Pendrive |
| 2 | Printers and Plotters | Output devices for drawings |
| 3 | External Storage Devices | Magnetic tapes, zip drives, removable hard disks |
| 4 | Monitor | Display screen |
| 5 | Keyboard | Text/command input |
| 6 | Digitizer, Puck and Mouse | Pointing/input devices |

### 1. System Unit
- The system unit is the part of the computer that performs **all data processing**.
- Its main components are the **CPU** and **Memory**.
- In mainframes and minicomputers, the CPU and memory are housed in **separate compartments**, each containing thousands of devices.

### Memory — Classification

| Type | Nature | Examples | Notes |
|---|---|---|---|
| **Primary Memory** | Volatile (data lost when power is off) | RAM (Random Access Memory), ROM (Read Only Memory) | Connected directly on the motherboard |
| **Secondary Memory** | Non-volatile (data retained without power) | Magnetic: Hard disc, Floppy disc | Used for permanent/long-term storage |
| | | Optical: CD, DVD | |
| | | Compact discs: CD-ROM, CD-RW, CD-R | CD-ROM = read only; CD-RW = re-writable; CD-R = recordable once |

### External Storage Devices
- Common types: **magnetic tapes, zip drives, removable hard disks**.
- Primarily used to keep **backup copies** of electronic files for safekeeping.
- **Magnetic tapes** (resembling a small videocassette) can store thousands of megabytes of data, but they are **slow** and take a long time to store or retrieve data.
- **Removable hard disks** are a newer, faster alternative for data storage/backup.

### The Monitor
- The monitor displays information on screen; a good monitor is essential because many CADD techniques rely heavily on **colour**.
- Monitor sizes commonly range from about **13 inches to 30 inches or more** *(inferred from context)*.
- Today's monitors can typically display **millions of colours**.
- **Resolution** is the main factor determining monitor quality — it refers to the **sharpness of the displayed image**.
- Resolution is measured in **pixels** (picture elements): the more pixels, and the closer together they are, the sharper the image.
- **Dot pitch** = the distance between pixels.
  - The **smaller** the dot pitch, the **sharper** the image.
  - A dot pitch of **0.26 mm or less** is generally recommended for CADD applications *(inferred/clarified — smaller dot pitch gives better sharpness)*.

### Printers and Plotters
- CADD drawings are printed using fine-quality **printers and plotters**, producing output that is neat, clean, and as accurate as the naked eye can perceive.
- Print accuracy is measured in **DPI (dots per inch)** — drawings can be printed at up to **1200 dpi**, meaning **1200 dots are printed within a one-inch long line** *(corrected from "non-inch")*.
- Output can vary in size, line type, text font, and colour, while remaining highly accurate, neat, and crisp.

### Keyboard
Input device containing keys to feed information into the computer. Key categories:

| Key Type | Function |
|---|---|
| Character keys | Letters, numbers, punctuation symbols (typewriter keys) |
| Action/Function keys | F₁ to F₁₂ — function depends on the software in use |
| Cursor control keys | Move the cursor left, right, up, down |
| Page Up / Page Down | Move to preceding/following page |
| Home | Move to the top of the document |
| End | Move to the end of the document |
| Num Lock | Enables numeric entry 0–9 |
| Caps Lock | Toggles uppercase letter entry |
| Shift | Used for capitalisation / secondary key functions |
| Ctrl / Alt | Used in combination with other keys for special actions (e.g. Ctrl+Alt+Delete restarts the machine) |
| Enter | Executes the given instruction/command |
| Tab | Moves between fields/options |
| Esc | Cancels/ignores the current entry or command |
| Delete / Backspace | Remove characters |

> Computer keyboard layout type: **QWERTY**.

### Digitizer, Puck and Mouse
- The **digitizer** (also called a **graphic tablet**) and the **puck** are the most common data input devices used in CADD systems — they let you enter point locations and make menu selections.
- A **mouse** is another pointing device usable with CADD; like the puck, it controls cursor position by being rolled across a flat surface, but it does **not require a digitizer**.

| Device | Cost | Data Entry Capability |
|---|---|---|
| Digitizer / Puck | More expensive | More precise, more data-entry options |
| Mouse | Much cheaper | Limited data-entry options |

- Some CADD programs support mouse-only input; others support both mouse and digitizer.

---

## Part C — Computer System Architecture

A computer system consists of a **computer + peripheral devices + software**. Inside the computer, three core units handle processing:

1. **Arithmetic Logical Unit (ALU)**
2. **Control Unit (CU)**
3. **Central Processing Unit (CPU)**

### 1) ALU (Arithmetic Logical Unit)
- Performs **processing of data and instructions**.
- Major operations: **addition, subtraction, multiplication, division, logic, and comparison**.
- Data flow: data is transferred from the storage unit **to** the ALU for processing; after processing, output is returned **back to** the storage unit for further processing or storage.

### 2) CU (Control Unit)
- Acts like a **supervisor**, ensuring operations happen in the correct order/manner.
- Determines the **sequence** in which programs and instructions are executed.
- Responsibilities: processing programs stored in main memory, interpreting instructions, and issuing signals to other units to execute them.
- Coordinates the activity of the computer's **peripheral equipment** (input and output devices).

### 3) CPU (Central Processing Unit)
- The **CPU = ALU + CU combined**.
- Often described as the **"brain"** of the computer — it makes all major decisions, performs all calculations, and directs/controls the computer's functions.
- The CPU **interprets and executes instructions**.

---

## Part D — AutoCAD Graphical User Interface (GUI)

| GUI Element | Description |
|---|---|
| **Title bar** | Shows the name of the drawing currently in use, e.g. `drawing.dwg` |
| **Menu bar** | Quick access to AutoCAD's general controls and settings. Main capabilities: (1) issues a command requiring keyboard or drawing input, (2) displays additional menu choices via a ▶ symbol — called **cascading menus**, (3) displays a **dialogue box** containing settings that can be changed |
| **Standard toolbar** | Contains standard commands used for getting information and making modifications |
| **Properties toolbar** | Shows/edits entity properties — line thickness, colour, layer, line type, etc. |
| **Draw toolbar** | Group of drawing commands — line, arc, circle, etc. |
| **Modify toolbar** | Tools for modifying entities — erase, trim, etc. |
| **Draw area** | The workspace where the drawing is created; displayed as a grid; area can be increased/decreased using the boundary **Limits** command |
| **UCS (User Coordinate System)** | Indicates which plane the drawing is currently being drawn on; the plane can be changed to draw in different views |
| **Command prompt window** | Used to type in commands via the keyboard |
| **Crosshair** | The pointer used to draw, select, and locate points |
| **Layout tab** | Used to select a particular drawing layout |
| **Function tabs** (status bar) | Located below the command prompt window; show status of Grid, Osnap, etc. — fundamental for effective drawing |

### Key Concepts
- A drawing element such as a **line, arc, or circle** is called an **entity**.
- In AutoCAD, **every point is identified by its x, y, z coordinates**.
- Coordinates help locate a single point precisely within the AutoCAD workspace.
- The **origin** of any drawing is at **(0, 0)**.
- **UCS** stands for **User Coordinate System**.

---

## Part E — Basic Terms in CAD

| Term | Definition |
|---|---|
| **Absolute coordinates** | Distance measured from a fixed reference point (the origin) |
| **Aperture** | The effective diameter (size) of the target box shown at the crosshairs, used to pick/select objects when an object snap mode is active |
| **Cartesian coordinates** | A rectangular system of measurement (using x and y axes) used to locate points in the drawing area |
| **Object snaps (Osnap)** | A method for indicating precise point locations by referencing points on existing drawing objects (e.g. endpoint, midpoint, centre) |
| **Origin point** | The **(0, 0)** location of the coordinate system |
| **Polar coordinates** | A system used to locate a point by specifying a **distance and angle** measured from a fixed reference point *(completed — original text incomplete)* |
| **Prototype drawing** | A template drawing that retains settings such as the last cursor location, used as a starting point for new drawings |
| **Relative coordinates** | Distance measured from the **last location of the cursor**, rather than from the fixed origin |
| **User-defined coordinate system (UCS)** | A customised mode of measurement that allows the user to set up their own coordinate system orientation |

---

## Part F — Coordinate Entry Methods

| Method | How Points Are Specified | Syntax / Notes |
|---|---|---|
| **Absolute method** | All input points specified using Cartesian coordinates, measured from the fixed origin (0,0) | `x,y` |
| **Relative method** | After locating the first point, each subsequent point is entered relative to the previous point | `@x,y` |
| **Polar method** | After locating the first point, remaining points are drawn using distance and angle from the previous point | `@distance<angle` |
| **Direct distance entry** | A line is drawn by typing its **length**, with its **direction** set by the position/movement of the cursor on screen | Type length, move cursor to set direction, press Enter |

> **File system note:** A **directory** is a collection of files. A **file** is a collection of data belonging to a drawing or a set of related drawings.

---

## Part G — Keyboard Shortcuts & Function Keys

### Function Keys (F1–F12)

| Key | Feature | Description |
|---|---|---|
| F1 | Help | Calls up the help screen |
| F2 | TXTSCR | Toggles the text screen display |
| F3 | Object Snap | Toggles object snap mode on/off |
| F4 | 3DOSNAP | Toggles 3D object snap mode on/off |
| F5 | ISOPLANE | Toggles isoplane mode (switches isometric drawing plane) |
| F6 | Dynamic UCS | Turns on UCS alignment with a planar surface |
| F7 | Grid Mode | Turns the grid display on/off |
| F8 | ORTHO | Toggles ortho (orthogonal) mode on/off |
| F9 | SNAP | Toggles snap mode on/off |
| F10 | POLAR | Toggles polar tracking mode on/off |
| F11 | OTRACK | Toggles object snap tracking mode on/off |
| F12 | DYNMODE | Toggles dynamic input mode on/off |

### Ctrl + Key Shortcuts (de-duplicated)

| Shortcut | Action |
|---|---|
| Ctrl+N | Start a new drawing |
| Ctrl+O | Open an existing drawing |
| Ctrl+S | Save the drawing |
| Ctrl+Shift+S | Save As |
| Ctrl+P | Plot settings |
| Ctrl+Q | Exit the AutoCAD program |
| Ctrl+A | Select all |
| Ctrl+C | Copy |
| Ctrl+V | Paste |
| Ctrl+Shift+V | Paste copied objects as a block |
| Ctrl+X | Cut |
| Ctrl+Y | Redo |
| Ctrl+Z | Undo |
| Ctrl+G | Toggle Grid |
| Ctrl+B | Toggle Snap |
| Ctrl+D | Toggle Dynamic UCS (DUCS) |
| Ctrl+E | Cycle through isoplanes in an isometric drawing |
| Ctrl+F | Toggle OSNAP on/off |
| Ctrl+H | Pick styles |
| Ctrl+I | Toggle coordinate display on/off |
| Ctrl+J | Repeat the last command |
| Ctrl+K | Insert a hyperlink |
| Ctrl+L | Toggle ORTHO on/off |
| Ctrl+R | Cycle through viewports on the current layout |
| Ctrl+T | Toggle TABLET mode on/off |
| Ctrl+Tab | Switch to next open drawing tab |
| Ctrl+0 | Clean screen — shows only the drawing area, hides palettes/toolbars |
| Ctrl+1 | Open the Properties palette (lists object properties) |
| Ctrl+2 | Open the Design Center palette |
| Ctrl+9 | Toggle visibility of the command line |

### Type + Enter Shortcuts

| Command | Action |
|---|---|
| Z + Enter | Zoom |
| P + Enter | Pan |
| R + Enter | Redraw |
| RE + Enter | Regen (regenerate the drawing) |

---

## Part H — Basic AutoCAD Commands

AutoCAD commands fall broadly into two groups: **Drawing Commands** and **Modifying Commands**.

### Common Command Aliases (short → full → use)

| Alias | Full Command | Use |
|---|---|---|
| L | Line | Draws simple straight lines |
| C | Circle | Draws a circle |
| PL | Polyline | Draws a connected polyline |
| REC | Rectangle | Draws a rectangle |
| POL | Polygon | Draws a polygon with a minimum of **3** and a maximum of **1024** sides |
| ARC | Arc | Draws an arc |
| ELLIPSE | Ellipse | Draws an ellipse using a major and minor axis |
| REG | Region | Creates a region geometry |
| CO | Copy | Copies an object |
| ARRAY | Array | Creates a rectangular, polar, or path array |
| TR | Trim | Trims geometry |
| OP | Options | Opens the window containing most AutoCAD settings |
| SC | Scale | Changes the scale of an object |
| B | Block | Creates a block; block properties are set via the Block Definition window |
| I | Insert | Inserts an existing block or drawing as a block |
| ST | Text Style | Opens the Text Style window to control default text properties |
| X | Explode | Breaks down a polyline, array, or block into simple geometry |
| F | Fillet | Adds rounded corners ("fillets") to sharp edges |
| CHA | Chamfer | Adds slanted edges ("chamfers") to sharp corners |
| LA | Layer | Opens the Layer Properties Manager palette for creating/managing layers |
| PRINT | Plot | Plots a drawing to a plotter, printer, or file |

### Full Command Glossary (alphabetical)

| Command | Description |
|---|---|
| Arc | Draws an arc of any size |
| Area | Calculates the area of a polygon, circle, or a boundary defined by points |
| Array | Copies selected objects in a circular or rectangular pattern |
| Autodesk | The software company that manufactures and sells AutoCAD |
| Bhatch | Fills a defined boundary with a hatch pattern |
| Blipmode | Turns blip markers on and off |
| Block | Combines selected individual objects into a single named unit |
| Block Definition | The set of individual objects that make up a named block |
| Block Reference | An inserted image/instance of a block definition in a drawing |
| Break | Erases part of an object between two specified points |
| Boundary | Creates a polyline around a closed area |
| Chamfer | Creates a chamfered (slanted) corner at the intersection of two selected lines |
| Circle | Draws a circle of any size |
| Copy | Makes one or more copies of selected objects |
| Copy Clip | Copies selected objects to the Windows clipboard |
| DD (prefix) | Stands for **"Dynamic Dialog"** box |
| Ddatte | Edits attributes via a dialog box |
| Ddedit (Edit) | Edits text and attributes via a dialog box |
| Ddgrips (Grips) | Enables grips and lets you edit object properties via grips |
| Ddim (Dim) | Dialog that controls dimension settings |
| Ddinsert (Insert) | Places blocks into the drawing via a dialog box |
| Ddunits (Units) | Sets the drawing units of measurement |
| Dimstyle | Creates named dimension styles to control dimension settings/appearance |
| Dist | Determines the distance and angle between two points |
| Divide | Places markers along an object, dividing it into equal parts |
| Dtext | Enters single-line text |
| Erase | Deletes objects from the drawing |
| Explode | Breaks a block or polyline back into individual objects |
| Extend | Extends a line or arc to meet another object |
| Fillet | Constructs an arc (rounded corner) between two lines |
| Grid | Displays a grid of dots used for snapping/visual reference while designing |
| Id | Displays the coordinate of a point selected on the drawing |
| Isoplane | Changes the direction of the isometric crosshairs (left, top, right) |
| Layer | Creates drawing layers for organising colours and line types |
| Lengthen | Lengthens or shortens an object |
| Limits | Defines the lower-left and upper-right corners of the drawing area |
| Line | Draws straight lines of any length |
| Linetype | Defines, loads, and sets the line type |
| List | Provides database information about selected objects |
| Ltscale | Linetype scale — controls the size of line-type patterns in a drawing |
| Mirror | Creates a symmetrical, reflected copy of selected objects |
| Move | Moves selected objects to another location in the drawing |
| Mview | Creates paper-space viewports |
| Offset | Creates parallel copies of lines, arcs, and circles |
| Oops | Recalls the last set of objects that were erased |
| Open | Opens an existing drawing |
| Ortho | Restricts cursor movement to horizontal or vertical only |
| Osnap | Allows selection of precise points on objects (object snap) |
| Pan | Moves the display window, changing the view while keeping direction/magnification the same |
| Pedit | Edits 2D polylines |
| Pline | Draws 2D polylines |
| Polygon | Creates a regular polygon with a specified number of sides |
| Purge | Removes unused items (layers, blocks, etc.) from a drawing |
| Qsave | Saves the drawing without prompting for a file name |
| Recover | Attempts to recover a damaged or corrupted drawing |
| Rectang | Draws a rectangular polyline |
| Redo | Reverses the previous Undo command |
| Redraw | Refreshes the screen pixels in the drawing window |
| Regen | Regenerates the current viewport |
| Rotate | Rotates selected objects to a specified angle |
| Save | Saves the current drawing to the hard drive |
| Saveas | Saves the current drawing under a new name |
| Scale | Changes the size of objects by a chosen scale factor |
| Scale factor | The ratio by which a drawing is scaled up/down to fit a particular sheet size when plotted |
| Snap | Restricts the cursor to precise points along a grid |
| Spell | Checks spelling within a drawing |
| Style | Names and formats text — font, size, obliquing angle, etc. |
| Toolbar | Customises, hides, or displays toolbars |
| Transparent | Allows certain display/setting commands to run **without cancelling** the current command (signalled by a leading apostrophe) |
| Trim | Deletes the portion of an object that crosses a selected cutting edge |
| U | Reverses the effect of the previous command |
| Undo | Same as U, but with additional options |
| UCS | Defines or modifies the current User Coordinate System |
| Ucsicon | Controls the visibility and placement of the UCS icon |
| Wblock | Creates a new, separate drawing file from selected blocks/objects |
| Windows Clipboard | Temporary memory area where copied objects are held before being pasted into another file |
| Xref | External Reference — lets you reference another AutoCAD drawing without permanently merging it into the current one |
| Zoom | Enlarges or reduces the displayed view of the drawing |

### 3D & Solid Modelling Shortcuts

| Short Key | Full Key | Usage |
|---|---|---|
| 3D | 3D Command Line | Access 3D options |
| BOX | Box | Draws a cube/box solid |
| CYLINDER | Cylinder | Draws a cylinder |
| DDUCS | DDUCS | Opens the UCS dialogue box |
| DDUCSP | DDUCSP | Opens the UCS dialogue box at the Orthographic tab |
| EXIT* | Extrude | Extrudes a face *(short key as transcribed; verify in AutoCAD as EXT)* |
| IN | Intersect | Creates the intersection of objects |
| REV | Revolve | Revolves an object about an axis |
| RR | Render | Opens the Render dialogue box |
| SE | Section | Creates a section |
| SL | Slice | Slices a solid |
| SU | Subtract | Subtracts one solid from another |
| TOR | Torus | Draws a torus (ring) shape |
| UC | DDUCS | Displays the UCS Manager dialogue box |

---

## Part I — File Formats, Workspaces & Units

### AutoCAD File Formats

| Extension | Description |
|---|---|
| `.dwg` | Standard AutoCAD drawing file extension |
| `.bak` | Backup file, automatically created each time the drawing is saved |
| `.dwt` | AutoCAD template file |
| `.dwf` | Drawing Web Format — for sharing drawings online or via a DWF viewer |
| `.sv$` | Autosave file, created automatically at a set time interval *(commonly `.sv$`; transcribed as ".svs" in source)* |
| `.dxf` | Drawing Exchange Format — used to export drawings for use in other software |
| `.pdf` | Portable Document Format — used by Adobe; can be easily viewed by most software |

### Plotting vs Printing

| Term | Meaning |
|---|---|
| **Plotting** | Refers to large-scale printing, e.g. sheet sizes 24×36 or 36×42 inches, produced on a **plotter** |
| **Printing** | Refers to small-scale printing, e.g. sheet sizes 8.5×11 or 11×17 inches |

> Historically "printing" referred to smaller-format printers and "plotting" to large-sheet plotters, but the two terms are now used almost interchangeably.

### AutoCAD Workspaces (3 types)
1. **3D Basics**
2. **3D Modelling**
3. **Drafting and Annotation**

### AutoCAD Units (5 types)
1. **Architectural** — feet and inches
2. **Decimal**
3. **Engineering** — inches
4. **Fractional**
5. **Scientific** — exponential (10e) form

### Useful Defaults
- **OOPS** — restores all entities erased by the most recent Erase command. Shortcut: **OO**.
- **Grid spacing** — default spacing is **10 units** in both the X and Y directions; it can be changed via the **Grid Settings** dialogue box (right-click the Grid button at the bottom of the screen).

---

## Part J — Annotation, Block, Draft & Inquiry Tools

### Annotation Tools

| Tool | Shortcut | Use |
|---|---|---|
| Text | TEXT | Creates single-line text |
| Multiline Text | T | Creates multi-line text |
| Text Style | ST | Collection of settings controlling text appearance |
| Dimension | DIM | Creates multiple dimension types within a single command session |

### Dimension Sub-types

| Dimension Type | Shortcut |
|---|---|
| Linear | DLI |
| Aligned | DAL |
| Angular | DAN |
| Continuous | DCO |
| Baseline | DBA |
| Arc Length | DAR |
| Radius | DRA |
| Diameter | DDI |
| Ordinate | DOR |
| Jogged | DJ |
| Dimension Style | D — collection of dimension settings controlling appearance |

### Leader & Table Tools

| Tool | Shortcut | Use |
|---|---|---|
| QLeader | LE | Creates a leader line with leader annotation |
| Table | TB | Contains rows/columns grouped as individual cells |
| Table Style | TS | Creates, modifies, or specifies table styles |

### Block Tools

| Tool | Shortcut | Use |
|---|---|---|
| Block | B | Collection of objects combined into a single named object |
| Create Block | B | Creates a block definition |
| Insert Block | I | Inserts a block into the drawing |
| Write Block | W | Saves a block out as a separate drawing file |
| Block Count | BCOUNT | Counts the number of blocks in the drawing |
| Block Edit | BE | Edits a block once created |

### Draft Settings

| Tool | Shortcut | Use |
|---|---|---|
| Draft Settings | DS | Sets Grid, Snap, Polar tracking, Object Snap tracking, Object Snap modes, Dynamic Input, and Quick Properties |

### Inquiry Tools

| Tool | Shortcut | Use |
|---|---|---|
| Distance | DI | Measures the distance and angle between two points |
| Radius | MEA | Measures the radius of an arc or circle |
| Angle | MEA | Measures the angle between two lines |
| Area | AA | Calculates the area and perimeter of an object or defined region |
| Volume | MEA | Calculates the volume of objects |
| Mass Properties | MASSPROP | Calculates/displays mass properties of regions or solids |
| List | LI | Displays database information for selected objects |
| ID | ID | Displays the coordinate value of a selected location |

---

## Quick Revision

### Quick Numbers Table

| Value | Context |
|---|---|
| December 1982 | AutoCAD first introduced |
| 13″–30″+ | Typical monitor size range |
| ≤0.26 mm | Recommended dot pitch for CADD monitors (smaller = sharper) |
| 1200 dpi | Max practical print accuracy (1200 dots per one-inch line) |
| F1–F12 | Function key range used for AutoCAD toggles |
| 3 | Minimum number of sides for a polygon (POL command) |
| 1024 | Maximum number of sides for a polygon (POL command) |
| 5 | Number of AutoCAD unit types (Architectural, Decimal, Engineering, Fractional, Scientific) |
| 3 | Number of AutoCAD workspaces (3D Basics, 3D Modelling, Drafting & Annotation) |
| 10 units | Default grid spacing in X and Y |
| (0,0) | Default origin point of any drawing |
| 24×36 / 36×42 | Typical large plotter sheet sizes (inches) |
| 8.5×11 / 11×17 | Typical small printer sheet sizes (inches) |

### Mnemonic / Acronym Decoder

| Acronym | Full Form |
|---|---|
| CAD | Computer Aided Design |
| CADD | Computer Aided Design and Drafting |
| ALU | Arithmetic Logical Unit |
| CU | Control Unit |
| CPU | Central Processing Unit |
| RAM | Random Access Memory |
| ROM | Read Only Memory |
| GUI | Graphical User Interface |
| UCS | User Coordinate System |
| DPI | Dots Per Inch |
| DWG | (AutoCAD) Drawing file |
| DWF | Drawing Web Format |
| DXF | Drawing Exchange Format |
| DWT | Drawing Template |
| OOPS | Restore-last-erased command (not a true acronym — a command name) |
| DD (command prefix) | Dynamic Dialog |

### Comparison Tables

**RAM vs ROM**

| Feature | RAM | ROM |
|---|---|---|
| Full form | Random Access Memory | Read Only Memory |
| Volatility | Volatile (data lost on power-off) | Volatile *(grouped under Primary Memory in source — both sit on the motherboard)* |
| Location | Motherboard | Motherboard |

**Primary vs Secondary Memory**

| Feature | Primary Memory | Secondary Memory |
|---|---|---|
| Volatility | Volatile | Non-volatile |
| Examples | RAM, ROM | Hard disc, Floppy, CD, DVD, CD-ROM/RW/R |
| Location | On motherboard | External/internal storage drives |

**Printing vs Plotting**

| Feature | Printing | Plotting |
|---|---|---|
| Scale | Small (8.5×11, 11×17 in) | Large (24×36, 36×42 in) |
| Device | Printer | Plotter |
| Modern usage | Terms now used almost interchangeably | Terms now used almost interchangeably |

**Absolute vs Relative vs Polar Coordinate Entry**

| Method | Reference Point | Syntax |
|---|---|---|
| Absolute | Fixed origin (0,0) | `x,y` |
| Relative | Last cursor point | `@x,y` |
| Polar | Last cursor point, using angle | `@distance<angle` |

**Digitizer/Puck vs Mouse**

| Feature | Digitizer / Puck | Mouse |
|---|---|---|
| Cost | Higher | Lower |
| Data entry options | More | Limited |
| Requires tablet | Yes | No |

---

*[Diagram placeholders from the original whiteboard-style slides — such as the AutoCAD GUI layout and coordinate axis illustrations — were not captured in the source text; descriptions above are inferred from surrounding context.]*
