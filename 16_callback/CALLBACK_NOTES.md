# JavaScript Callbacks — Quick Reference

## Definition

A **callback** is a function passed as an argument to another function, and executed after that function completes its task.

---

## How It Works

```js
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Dhanush", sayBye);

// Output:
// Hello, Dhanush
// Goodbye!
```

- `sayBye` is passed as an argument — it is the **callback**
- It runs **after** `greet` finishes its work

---

## Async Callback

Callbacks are commonly used for operations that take time — like timers, file reads, or API calls.

```js
console.log("Start");

setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds  ← async, not blocking
```

---

## Real-World Use Case — Step-by-Step Automation

```js
function openBrowser(callback) {
    console.log("Browser opened");
    callback();
}

function goToPage(callback) {
    console.log("Page loaded");
    callback();
}

function clickLogin(callback) {
    console.log("Login clicked");
    callback();
}

openBrowser(function () {
    goToPage(function () {
        clickLogin(function () {
            console.log("Done!");
        });
    });
});
```

---

## The Problem — Callback Hell

Nesting too many callbacks creates deeply indented, hard-to-maintain code:

```js
step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!"); // buried 4 levels deep
            });
        });
    });
});
```

**Issues:**
- Hard to read and follow
- Error handling becomes complex
- Difficult to debug

---

## The Solution — Promises

```js
// ✅ Same logic, flat and clean
openBrowser()
    .then(() => goToPage())
    .then(() => clickLogin())
    .then(() => console.log("Done!"))
    .catch(err => console.log("Error:", err));
```

---

## Evolution of Async JavaScript

```
Callbacks  →  Promises  →  Async/Await
(nested)      (chained)    (looks sync)
```

---

## Key Rules

- A callback is **just a regular function** — no special syntax
- It is **passed as an argument**, not called immediately
- It executes **after** the parent function completes
- Heavily used in event listeners, timers, and async operations
- Too many nested callbacks = **Callback Hell** → solved by Promises
