# JavaScript Promises — Quick Reference

## Definition

A **Promise** is an object that represents the eventual **success or failure** of an asynchronous operation and its resulting value.

---

## 3 States

| State | Meaning |
|-------|---------|
| ⏳ **Pending** | Operation is still in progress |
| ✅ **Fulfilled** | Operation completed successfully |
| ❌ **Rejected** | Operation failed |

---

## 3 Handlers

| Handler | Runs when... |
|---------|-------------|
| `.then(result)` | Promise is **resolved** |
| `.catch(error)` | Promise is **rejected** |
| `.finally()` | **Always** — resolved or rejected |

---

## Basic Syntax

```js
let promise = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve({ status: 200, data: "User Data" });
    } else {
        reject({ status: 500, message: "Server Error" });
    }
});

promise
    .then(result => console.log(result.data))
    .catch(error => console.log(error.message))
    .finally(() => console.log("Done"));
```

---

## Promise Chaining

Used when async steps depend on each other — keeps code flat and readable.

```js
openBrowser()
    .then(msg => { console.log(msg); return goToLogin(); })
    .then(msg => { console.log(msg); return enterCredentials(); })
    .then(msg => { console.log(msg); return clickLogin(); })
    .then(msg => console.log(msg))
    .catch(err => console.log("Error:", err))
    .finally(() => console.log("Done"));
```

---

## Promise Methods

### `Promise.all()` — All must succeed

```js
Promise.all([checkAuth, checkDB, checkCache])
    .then(results => console.log("All passed:", results))
    .catch(err => console.log("One failed:", err));
```

> Fails immediately if **any** promise rejects.

---

### `Promise.allSettled()` — Get all results

```js
Promise.allSettled([p1, p2, p3])
    .then(results => {
        results.forEach(r => console.log(r.status, r.value || r.reason));
    });
```

> Returns result of **every** promise — fulfilled or rejected. Useful for test reports.

---

### `Promise.race()` — Fastest wins

```js
Promise.race([fastServer, slowServer])
    .then(winner => console.log("Winner:", winner));
```

> Resolves or rejects with whichever promise settles **first**.

---

## Why Promises?

Promises solve **Callback Hell** — deeply nested callbacks that are hard to read and debug.

```js
// ❌ Callback Hell
login(function () {
    getProfile(function () {
        loadDashboard(function () {
            console.log("Done");
        });
    });
});

// ✅ Promise Chain
login()
    .then(() => getProfile())
    .then(() => loadDashboard())
    .then(() => console.log("Done"))
    .catch(err => console.log(err));
```

---

## Key Rules

- `resolve()` → `.then()` runs, `.catch()` is skipped
- `reject()` → `.catch()` runs, `.then()` is skipped
- `.finally()` always runs regardless of outcome
- Promises are **not re-usable** — once settled, state doesn't change
- `async/await` is syntactic sugar built on top of Promises
