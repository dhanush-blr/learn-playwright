# JavaScript Learning Journey 🚀

> Hands-on, chapter-by-chapter JavaScript curriculum with practical code examples, deep-dive notes, and interview preparation.

[![Chapters](https://img.shields.io/badge/Chapters-18%20Completed-brightgreen?style=flat-square)](#-curriculum)
[![Lessons](https://img.shields.io/badge/Lessons-153%2B%20Files-blue?style=flat-square)](#-curriculum)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 💡 Overview

- **One concept per file:** Focused, isolated code snippets designed to build intuition without unnecessary boilerplate.
- **Interview-ready:** Theory paired with quick-reference tables, common pitfalls, and interview Q&As.
- **Structured path:** Progressing steadily from language fundamentals to asynchronous execution and modern design patterns.

---

## ⚡ Quick Start

**Prerequisites:** [Node.js v18+](https://nodejs.org/)

```bash
# Clone the repository
git clone https://github.com/dhanush-blr/learn-playwright.git
cd learn-playwright

# Run any lesson directly with Node
node 01_chapter_hello_world/01-hello-world.js
node 11_chapter_functions/93_hoisting.js
node 16_callback/131_async_callback.js
node 17_promise/136_promise.js
node 20_async_await/151_sequential_execution.js
node 20_async_await/152_parallel_execution.js
```

---

## 📚 Curriculum

| # | Chapter | Core Topics | Lessons |
|---|---------|-------------|:-------:|
| 01 | [JavaScript Basics](./01_chapter_hello_world/) | Environment setup, `console.log` | 1 |
| 02 | [Variables](./02_chapter_variables/) | Variable declaration, `let` scope | 1 |
| 03 | [Identifiers](./03_chapter_identifiers/) | Naming rules, reserved words, comments | 4 |
| 04 | [Literals](./04_chapter_literals/) | Data types, `null`, `undefined`, numbers | 6 |
| 05 | [Operators](./05_chapter_operators/) | Arithmetic, comparison, logical, ternary, typeof, nullish coalescing | 25 |
| 06 | [Statements](./06_chapter_statements/) | `if / else`, compound conditionals | 3 |
| 07 | [Switch](./07_chapter_switch/) | `switch`, grouped cases, state-machine patterns | 9 |
| 08 | [User Inputs](./08_chapter_user_inputs/) | Terminal I/O, `readline`, `prompt`, `fs` | 4 |
| 09 | [Loops](./09_chapter_loops/) | `for`, `while`, `do-while`, nested loops, control flow | 12 |
| 10 | [Arrays](./10_chapter_arrays/) | CRUD operations, sorting, searching, destructuring, spread syntax | 16 |
| 11 | [Functions](./11_chapter_functions/) | Declarations, expressions, arrows, IIFEs, hoisting, TDZ | 23 |
| 12 | [Closures & Scope](./12_chapter_function_closures/) | Lexical scope, closures, execution context | 5 |
| 13 | [Strings](./13_chapter_strings/) | Slicing, template literals, string manipulation | 7 |
| 14 | [Objects](./14_chapter_objects/) | Object literals, methods, property access, pass-by-reference | 6 |
| 15 | [Multi-dimensional Arrays](./15_chapter_multi_dim_arrays/) | 2D matrices, nested loops, pattern printing | 6 |
| 16 | [Callbacks](./16_callback/) | Synchronous vs asynchronous callbacks, inversion of control, callback hell | 8 |
| 17 | [Promises](./17_promise/) | Promise lifecycle, `.then/.catch/.finally`, chaining, `all`, `allSettled`, `race` | 11 |
| 20 | [Async / Await](./20_async_await/) | `async` functions, `await`, `try/catch/finally`, sequential vs parallel, retry pattern, event loop order | 8 |

> **Total:** 153 core lesson files across 18 chapters + HackerRank problem sets.

---

## 🧠 Concept & Interview Notes

In-depth comparison cards and interview reference guides:

| Note | Focus Area |
|------|------------|
| [Source vs Bytecode vs Machine Code](./iq-notes/source-vs-bytecode-vs-binary.md) | V8 engine execution pipeline |
| [Hoisting & Temporal Dead Zone](./11_chapter_functions/102_hoisting_tbz.md) | `var` vs `let` vs `const`, function & class hoisting |
| [Callback Guide & Interview Notes](./16_callback/CALLBACK_NOTES.md) | Callbacks, pyramid of doom, interview questions |
| [Promise Guide & Interview Notes](./17_promise/PROMISE_NOTES.md) | Promise states, static methods, interview walkthrough |
| [Async/Await Notes](./20_async_await/async_await_notes.md) | `async/await` patterns, sequential vs parallel, retry, event loop |

---

## 🗺️ Roadmap

### Completed Milestones
- [x] **Core Fundamentals** (Chapters 01–09: Variables, Literals, Operators, Conditionals, Loops)
- [x] **Data Structures** (Chapters 10, 13–15: Arrays, Strings, Objects, 2D Arrays)
- [x] **Functions & Scope** (Chapters 11–12: Function types, Hoisting, Closures, Execution Context)
- [x] **Asynchronous Foundations** (Chapters 16–17: Callbacks, Promises, Concurrency methods)
- [x] **Async / Await** (Chapter 20: `async/await`, sequential vs parallel, retry pattern, event loop)

### Upcoming Milestones
- [ ] **Error Handling** (`try / catch / finally`, custom error classes)
- [ ] **OOP & Prototypes** (Prototypes, prototype chain, ES6 Classes)
- [ ] **Modules** (ESM `import` / `export` vs CommonJS `require`)
- [ ] **DOM & Browser APIs** (Events, listeners, web APIs)
- [ ] **TypeScript** (Static typing, interfaces, generics)
- [ ] **Playwright Automation** 🎭 (End-to-end browser testing)

---

## 📌 Quick Reference Cheatsheets

<details>
<summary><strong>1. <code>var</code> vs <code>let</code> vs <code>const</code></strong></summary>

| Feature | `var` | `let` | `const` |
|:---|:---:|:---:|:---:|
| Scope | Function | Block | Block |
| Hoisted | ✅ (as `undefined`) | ✅ (in TDZ) | ✅ (in TDZ) |
| Re-declarable | ✅ | ❌ | ❌ |
| Re-assignable | ✅ | ✅ | ❌ |
| Recommended | ❌ Deprecated | ✅ For reassignments | ✅ Default choice |

</details>

<details>
<summary><strong>2. Function Types</strong></summary>

```javascript
// 1. Function Declaration (Hoisted)
function add(a, b) {
  return a + b;
}

// 2. Function Expression (Not hoisted)
const add = function (a, b) {
  return a + b;
};

// 3. Arrow Function (Concise syntax, lexical 'this')
const add = (a, b) => a + b;

// 4. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Runs immediately");
})();
```

</details>

<details>
<summary><strong>3. Hoisting Summary</strong></summary>

| Declaration | Hoisted? | Initial Value | Access Before Declaration |
|:---|:---:|:---:|:---|
| `var` | ✅ | `undefined` | Returns `undefined` |
| `let` / `const` | ✅ | Uninitialized | Throws `ReferenceError` (TDZ) |
| `function` declaration | ✅ | Complete function | Works normally |
| `class` | ✅ | Uninitialized | Throws `ReferenceError` (TDZ) |

</details>

<details>
<summary><strong>4. Promises Summary</strong></summary>

| Concept | Explanation |
|:---|:---|
| **States** | `Pending` ➔ `Fulfilled` (resolved) or `Rejected` (error) |
| **Handlers** | `.then()` for fulfillment, `.catch()` for errors, `.finally()` always runs |
| **Chaining** | Returning values or promises from `.then()` enables sequential pipelines |
| **`Promise.all`** | Resolves when all succeed; fails immediately if any promise rejects |
| **`Promise.allSettled`** | Waits for all promises to settle regardless of outcome |
| **`Promise.race`** | Settles with the outcome of the fastest promise |

</details>

<details>
<summary><strong>5. Async / Await Summary</strong></summary>

| Concept | Key Point |
|:---|:---|
| **`async` function** | Always returns a Promise, even if you return a plain value |
| **`await`** | Pauses the async function until the Promise resolves; only works inside `async` |
| **Error handling** | Use `try/catch/finally` instead of `.catch()` |
| **Sequential** | `await` one by one — use when Step 2 depends on Step 1's result |
| **Parallel** | `Promise.all([fn1(), fn2()])` — use when steps are independent (much faster!) |
| **Event loop order** | Code after `await` defers to the microtask queue — sync code runs first |
| **Retry pattern** | Loop with `try/catch` — re-attempt on failure up to `maxRetries` |

```js
// Sequential (3s total)             // Parallel (1s total)
const r1 = await apiCall("A");       const [r1, r2, r3] = await Promise.all([
const r2 = await apiCall("B");         apiCall("A"), apiCall("B"), apiCall("C")
const r3 = await apiCall("C");       ]);
```

</details>

---

*Built with curiosity, one `console.log` at a time.* 🧑‍💻
