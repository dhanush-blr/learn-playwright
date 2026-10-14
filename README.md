# JavaScript Learning Journey 🚀

> *Started as a Playwright repo — evolved into a full JS curriculum, built one concept at a time.*

[![Progress](https://img.shields.io/badge/Chapters%20Completed-15-brightgreen?style=flat-square)](#-chapters)
[![Files](https://img.shields.io/badge/Lessons-131-blue?style=flat-square)](#-chapters)
[![Node](https://img.shields.io/badge/Node.js-v18%2B-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 What is this?

A hands-on, chapter-by-chapter JavaScript curriculum — written as I learn. Every file is a focused example, not a tutorial copy-paste. The `iq-notes/` folder pairs theory with side-by-side comparison tables for interview prep.

This repo now covers core JavaScript from basics through functions, closures, strings, objects, and multi-dimensional arrays with practical lessons for every concept.

**Philosophy:** One concept per file. No fluff. Build intuition before moving on.

---

## 🗂️ Repository Structure

```
learn-playwright/
│
├── 📁 01_chapter_hello_world/        ← Hello World
├── 📁 02_chapter_variables/          ← Variables & let
├── 📁 03_chapter_identifiers/        ← Identifiers, naming rules, comments
├── 📁 04_chapter_literals/           ← Literals, null, undefined, numbers
├── 📁 05_chapter_operators/          ← All operators (25 files)
├── 📁 06_chapter_statements/         ← if / else statements
├── 📁 07_chapter_switch/             ← switch, grouping, real-world use
├── 📁 08_chapter_user_inputs/        ← readline, prompt, fs input
├── 📁 09_chapter_loops/              ← for, while, do-while, nested
├── 📁 10_chapter_arrays/             ← Arrays — all operations (16 files)
├── 📁 11_chapter_functions/          ← Functions, hoisting, var/let/const
├── 📁 12_chapter_function_closures/  ← Scope, closures, function execution context
├── 📁 13_chapter_strings/            ← Strings, searching, slicing, templates
├── 📁 14_chapter_objects/            ← Objects, properties, functions, call by reference
├── 📁 15_chapter_multi_dim_arrays/   ← Multi-dimensional arrays, nested loops, pattern printing
│
├── 📁 hacker_rank/                   ← HackerRank practice problems
├── 📁 iq-notes/                      ← Concept comparison reference cards
│   ├── README.md                     ← Template for adding new notes
│   └── source-vs-bytecode-vs-binary.md
│
└── README.md                         ← you are here
```

---

## 📚 Chapters

| # | Chapter | Topics Covered | Files |
|---|---------|----------------|-------|
| 01 | [JavaScript Basics](./01_chapter_hello_world/) | Hello World, `console.log` | 1 |
| 02 | [Variables](./02_chapter_variables/) | `let` declaration and scope | 1 |
| 03 | [Identifiers](./03_chapter_identifiers/) | Naming rules, comments, IQ prep | 4 |
| 04 | [Literals](./04_chapter_literals/) | String, number, null, undefined | 6 |
| 05 | [Operators](./05_chapter_operators/) | Arithmetic, comparison, logical, ternary, typeof, null coalescing | 25 |
| 06 | [Statements](./06_chapter_statements/) | `if / else`, multiple conditions | 3 |
| 07 | [Switch](./07_chapter_switch/) | `switch`, grouped cases, real-world simulation | 9 |
| 08 | [User Inputs](./08_chapter_user_inputs/) | `readline`, `prompt`, `fs` | 5 |
| 09 | [Loops](./09_chapter_loops/) | `for`, `while`, `do-while`, nested loops, modulo | 12 |
| 10 | [Arrays](./10_chapter_arrays/) | CRUD, search, sort, slice, concat, destructuring, spread | 16 |
| 11 | [Functions](./11_chapter_functions/) | All 4 function types, arrow fns, hoisting, TDZ, IIFE | 24 |
| 12 | [Function Closures](./12_chapter_function_closures/) | Scope, closures, execution context, real examples | 5 |
| 13 | [Strings](./13_chapter_strings/) | Searching, slicing, templates, string methods | 8 |
| 14 | [Objects](./14_chapter_objects/) | Object creation, methods, config, call by value/ref | 6 |
| 15 | [Multi-dimensional Arrays](./15_chapter_multi_dim_arrays/) | 2D arrays, nested loops, pattern printing | 6 |

> **Total: 131 lesson files** across 15 chapters.

---

## 🧠 IQ Notes

Quick-reference cards that break down tricky concepts in structured comparison tables. Use the [template in iq-notes/README.md](./iq-notes/README.md) to generate new ones.

| Note | Concept |
|------|---------|
| [source-vs-bytecode-vs-binary.md](./iq-notes/source-vs-bytecode-vs-binary.md) | Source Code vs Byte Code vs Machine Code |
| [102_hoisting_tbz.md](./11_chapter_functions/102_hoisting_tbz.md) | JavaScript Hoisting — `var`, `let`, `const`, functions, classes |

---

## ⚡ Quick Start

**Prerequisites:** [Node.js v18+](https://nodejs.org/)

```bash
# Run any lesson file
node 01_chapter_hello_world/01-hello-world.js
node 11_chapter_functions/93_hoisting.js
node 10_chapter_arrays/79_destructing.js
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
- [x] Function Closures — scope, lexical environment, closures, real examples
- [x] Strings — searching, slicing, templates
- [x] Objects — creation, methods, `this`, call by value vs reference
- [x] Multi-dimensional arrays — nested arrays, matrix loops, print patterns

### 🔜 Up Next
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
