# JavaScript Learning Journey 🚀

> *Started as a Playwright repo — evolved into a full JS curriculum, built one concept at a time.*

[![Progress](https://img.shields.io/badge/Chapters%20Completed-11-brightgreen?style=flat-square)](#-chapters)
[![Files](https://img.shields.io/badge/Lessons-105%2B-blue?style=flat-square)](#-chapters)
[![Node](https://img.shields.io/badge/Node.js-v18%2B-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 What is this?

A hands-on, chapter-by-chapter JavaScript curriculum — written as I learn. Every file is a focused example, not a tutorial copy-paste. The `iq-notes/` folder pairs theory with side-by-side comparison tables for interview prep.

**Philosophy:** One concept per file. No fluff. Build intuition before moving on.

---

## 🗂️ Repository Structure

```
learn-playwright/
│
├── 📁 01_chapter_javascript/        ← Hello World
├── 📁 02_chapter_javascript/        ← Variables & let
├── 📁 03_chapter_Identifier/        ← Identifiers, naming rules, comments
├── 📁 04_chapter_literal/           ← Literals, null, undefined, numbers
├── 📁 05_chapter_operators/         ← All operators (25 files)
├── 📁 06_chapter_statement/         ← if / else statements
├── 📁 07_chapter_switch/            ← switch, grouping, real-world use
├── 📁 08_chapter_userinputs/        ← readline, prompt, fs input
├── 📁 09_chapter_loops/             ← for, while, do-while, nested
├── 📁 10_chapter_Arrays/            ← Arrays — all operations (16 files)
├── 📁 11_chapter_function/          ← Functions, hoisting, var/let/const
│
├── 📁 hacker_rank/                  ← HackerRank practice problems
├── 📁 iq-notes/                     ← Concept comparison reference cards
│   ├── README.md                    ← Template for adding new notes
│   └── source-vs-bytecode-vs-binary.md
│
└── README.md                        ← you are here
```

---

## 📚 Chapters

| # | Chapter | Topics Covered | Files |
|---|---------|----------------|-------|
| 01 | [JavaScript Basics](./01_chapter_javascript/) | Hello World, `console.log` | 1 |
| 02 | [Variables](./02_chapter_javascript/) | `let` declaration and scope | 1 |
| 03 | [Identifiers](./03_chapter_Identifier/) | Naming rules, comments, IQ prep | 4 |
| 04 | [Literals](./04_chapter_literal/) | String, number, null, undefined | 6 |
| 05 | [Operators](./05_chapter_operators/) | Arithmetic, comparison, logical, ternary, typeof, null coalescing | 25 |
| 06 | [Statements](./06_chapter_statement/) | `if / else`, multiple conditions | 3 |
| 07 | [Switch](./07_chapter_switch/) | `switch`, grouped cases, real-world simulation | 9 |
| 08 | [User Inputs](./08_chapter_userinputs/) | `readline`, `prompt`, `fs` | 4 |
| 09 | [Loops](./09_chapter_loops/) | `for`, `while`, `do-while`, nested loops, modulo | 12 |
| 10 | [Arrays](./10_chapter_Arrays/) | CRUD, search, sort, slice, concat, destructuring, spread | 16 |
| 11 | [Functions](./11_chapter_function/) | All 4 function types, arrow fns, hoisting, TDZ, IIFE | 24 |

> **Total: 105+ lesson files** across 11 chapters.

---

## 🧠 IQ Notes

Quick-reference cards that break down tricky concepts in structured comparison tables. Use the [template in iq-notes/README.md](./iq-notes/README.md) to generate new ones.

| Note | Concept |
|------|---------|
| [source-vs-bytecode-vs-binary.md](./iq-notes/source-vs-bytecode-vs-binary.md) | Source Code vs Byte Code vs Machine Code |
| [102_hoisting_tbz.md](./11_chapter_function/102_hoisting_tbz.md) | JavaScript Hoisting — `var`, `let`, `const`, functions, classes |

---

## ⚡ Quick Start

**Prerequisites:** [Node.js v18+](https://nodejs.org/)

```bash
# Run any lesson file
node 01_chapter_javascript/01-hello-world.js
node 11_chapter_function/93_hoisting.js
node 10_chapter_Arrays/79_destructing.js
```

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Hello World & `console.log`
- [x] Variables — `let`, `const`, `var`
- [x] Identifiers & naming conventions
- [x] Literals — string, number, boolean, null, undefined
- [x] All Operators — arithmetic, comparison, logical, ternary, typeof, nullish coalescing
- [x] Control Flow — `if / else`, multiple conditions
- [x] `switch` statements & grouped cases
- [x] User Inputs — `readline`, `prompt`, `fs`
- [x] Loops — `for`, `while`, `do-while`, nested
- [x] Arrays — full coverage (CRUD, search, sort, spread, destructuring)
- [x] Functions — all types, hoisting, TDZ, `var` vs `let` vs `const`

### 🔜 Up Next
- [ ] Objects — creation, methods, `this`, destructuring
- [ ] Prototypes & Inheritance
- [ ] ES6+ — Classes, Modules (`import`/`export`)
- [ ] Async JavaScript — callbacks, Promises, `async/await`
- [ ] Error handling — `try/catch/finally`
- [ ] DOM Manipulation (Browser JS)
- [ ] TypeScript — types, interfaces, generics
- [ ] Playwright — back to the roots 🎭

---

## 📌 Key Concepts Cheatsheet

<details>
<summary><strong>var vs let vs const</strong></summary>

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisted | ✅ (as `undefined`) | ✅ (TDZ) | ✅ (TDZ) |
| Re-declarable | ✅ | ❌ | ❌ |
| Re-assignable | ✅ | ✅ | ❌ |
| Use today? | ❌ Never | ✅ When reassigning | ✅ Default choice |

</details>

<details>
<summary><strong>Function Types</strong></summary>

```js
// Type 1 — Function Declaration (hoisted ✅)
function greet(name) { return `Hello, ${name}!`; }

// Type 2 — Function Expression (not hoisted ❌)
const greet = function(name) { return `Hello, ${name}!`; };

// Type 3 — Arrow Function (concise, no own `this`)
const greet = (name) => `Hello, ${name}!`;

// Type 4 — IIFE (runs immediately)
(function() { console.log("I run once!"); })();
```

</details>

<details>
<summary><strong>Hoisting Quick Reference</strong></summary>

| Keyword | Hoisted? | Initialized? | Access Before Declaration |
|---------|----------|--------------|--------------------------|
| `var` | ✅ | ✅ `undefined` | Returns `undefined` |
| `let` | ✅ | ❌ TDZ | `ReferenceError` |
| `const` | ✅ | ❌ TDZ | `ReferenceError` |
| `function` | ✅ | ✅ Full body | Works normally |
| `class` | ✅ | ❌ TDZ | `ReferenceError` |

</details>

---

*Built with curiosity, one `console.log` at a time.* 🧑‍💻
