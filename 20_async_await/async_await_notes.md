# Async / Await — Complete Notes 📒

---

## 1. The Evolution of Async Code

JavaScript is **single-threaded** — it can only do one thing at a time. To handle slow operations (API calls, file reads, timers), JS uses asynchronous patterns.

```
Callbacks  →  Promises (.then/.catch)  →  async/await  ✅
```

| Pattern | Problem |
|---|---|
| Callbacks | "Callback hell" — deeply nested, hard to read |
| Promises `.then()` | Better, but chaining gets long |
| `async/await` | Reads like normal top-to-bottom code ✅ |

---

## 2. Core Concepts

### `async` — Mark a function as asynchronous

- Always **returns a Promise**, even if you return a plain value
- The value gets automatically wrapped in `Promise.resolve(...)`

```js
async function getTestResults() {
  return "Pass";  // Automatically becomes Promise.resolve("Pass")
}

getTestResults().then(function (results) {
  console.log(results);  // "Pass"
});
```

> 💡 Because `async` returns a Promise, you can call `.then()` on it from outside.

---

### `await` — Wait for a Promise to resolve

- **Pauses** the `async` function until the Promise resolves
- Gives you the **resolved value** directly (no `.then()` needed)
- Can **only** be used inside an `async` function

```js
async function runTest() {
  let result  = await Promise.resolve("Login test passed");
  console.log(result);   // "Login test passed"

  let result2 = await Promise.resolve("Dashboard test passed");
  console.log(result2);  // "Dashboard test passed"
}

runTest();
```

> ⚠️ `await` pauses **only the current async function** — the rest of the program keeps running.

---

## 3. Error Handling — `try / catch / finally`

With Promises you use `.catch()`.  
With `async/await` you use `try/catch` — exactly like regular JavaScript error handling.

```js
async function testAPI() {
  try {
    let result = await Promise.reject("503 Service Unavailable");
    console.log("Result", result);   // ❌ Never runs
  } catch (error) {
    console.log("Error", error);     // ✅ "Error 503 Service Unavailable"
  } finally {
    console.log("Clean up!!");       // ✅ Always runs
  }
}

testAPI();
```

| Block | When it runs |
|---|---|
| `try` | Normal execution path |
| `catch` | When the Promise **rejects** (error occurs) |
| `finally` | **Always** — success or failure |

---

## 4. Real-World Example — Token → User Flow

> When Step 2 **depends** on Step 1's result, you MUST run them sequentially.

```js
function getToken() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('fake-token-123'), 500);
  });
}

function getUser(token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('Missing token'));
    } else {
      setTimeout(() => resolve({ id: 1, name: 'Alice', token }), 500);
    }
  });
}

async function run() {
  try {
    const token = await getToken();      // ① Wait for token
    const user  = await getUser(token);  // ② Use token to get user
    console.log(user);
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
```

---

## 5. Sequential vs Parallel Execution

### 🐢 Sequential — one by one (use when steps depend on each other)

```js
async function sequentialTest() {
  let start = Date.now();

  let r1 = await apiCall("Login");      // Wait 1s
  let r2 = await apiCall("Dashboard");  // Wait 1s
  let r3 = await apiCall("Report");     // Wait 1s

  console.log("Time: ~" + (Date.now() - start) + "ms");
  // ⏱️ Total: ~3000ms
}
```

Timeline:
```
|--- 1s ---|--- 1s ---|--- 1s ---|
  Login      Dashboard   Report
                                 ✅ 3 seconds total
```

---

### ⚡ Parallel — all at once (use when steps are independent)

```js
async function parallelTest() {
  let start = Date.now();

  let [r1, r2, r3] = await Promise.all([
    apiCall("Auth Service"),     // ┐
    apiCall("User Service"),     // ├── All fire at the same time
    apiCall("Payment Service"),  // ┘
  ]);

  console.log(r1);
  console.log(r2);
  console.log(r3);
  console.log("Time: ~" + (Date.now() - start) + "ms");
  // ⏱️ Total: ~1000ms (not 3000ms!)
}
```

Timeline:
```
|--- 1s ---|
  Auth ────┐
  User ────┤ All finish together!
  Payment ─┘
           ✅ 1 second total
```

### Sequential vs Parallel — When to use what?

| Scenario | Use |
|---|---|
| Step 2 needs Step 1's result (Login → Dashboard) | **Sequential** |
| Steps are independent (3 API health checks) | **Parallel** (`Promise.all`) |

---

## 6. Retry Pattern — Real QA Use Case

When an API is flaky, retry it instead of failing immediately.

```js
function createFlakyAPI(successAttempt) {
  let attempt = 0;

  return function () {
    attempt++;
    if (attempt < successAttempt) {
      return Promise.resolve("Attempt " + attempt + ": success!");
    }
    return Promise.reject("Attempt " + attempt + ": failed");
  };
}

async function retryTesting(operation, maxRetries) {
  for (let i = 1; i <= maxRetries; i++) {
    try {
      let result = await operation();
      console.log("PASS:", result);
      return result;               // ✅ Success — stop retrying
    } catch (error) {
      console.log("FAIL:", error);
      if (i === maxRetries) {
        throw new Error("Test failed after " + maxRetries + " attempts");
      }
    }
  }
}

async function runRetryExamples() {
  // Example 1: succeeds on attempt 3 (within 5 retry limit)
  await retryTesting(createFlakyAPI(3), 5);  // ✅ PASS

  // Example 2: needs 4 attempts but only 2 retries allowed
  try {
    await retryTesting(createFlakyAPI(4), 2);
  } catch (error) {
    console.log(error.message);              // ❌ "Test failed after 2 attempts"
  }
}

runRetryExamples();
```

---

## 7. Event Loop — Execution Order ⚠️

This is a **classic interview trick question**:

```js
console.log("A");

async function test() {
  console.log("B");
  await Promise.resolve();  // ← yields control back to event loop
  console.log("C");
}

test();
console.log("D");
```

**Output:**
```
A
B
D
C
```

**Why?**

| Step | What happens |
|---|---|
| `console.log("A")` | Prints `A` synchronously |
| `test()` is called | Enters the function, prints `B` |
| `await Promise.resolve()` | Pauses `test()`, yields to event loop |
| `console.log("D")` | Prints `D` — synchronous code continues |
| Microtask queue runs | Resumes `test()`, prints `C` |

> 💡 `await` always yields — even `await Promise.resolve()` (already resolved) defers the code after it to the **microtask queue**.

---

## 8. async/await in Playwright Tests

```ts
import { test, expect } from '@playwright/test';

async function getExampleValue(): Promise<string> {
  return 'abc';
}

test.describe('Async/Await in Playwright', () => {
  test('uses await in a Playwright test', async ({ page }) => {
    await page.goto('https://playwright.dev/');         // Wait for page load
    await expect(page).toHaveTitle(/Playwright/);       // Wait for assertion

    const value = await getExampleValue();              // Wait for helper
    expect(value).toBe('abc');
  });
});
```

> In Playwright, **every interaction is async** — `goto`, `click`, `fill`, `expect` — always `await` them!

---

## 9. async/await vs .then() — Side by Side

```js
// ❌ .then() chain — hard to follow
openBrowser()
  .then((msg) => { console.log("Step 1", msg); return goToLogin(); })
  .then((msg) => { console.log("Step 2", msg); return enterCredentials(); })
  .then((msg) => { console.log("Step 3", msg); return clickLogin(); })
  .catch((error) => { console.log("Error:", error); });

// ✅ async/await — clean, top to bottom
async function runLoginFlow() {
  let msg1 = await openBrowser();        console.log("Step 1:", msg1);
  let msg2 = await goToLogin();          console.log("Step 2:", msg2);
  let msg3 = await enterCredentials();   console.log("Step 3:", msg3);
  let msg4 = await clickLogin();         console.log("Step 4:", msg4);
}
```

---

## 10. Quick Reference Cheat Sheet 🧠

```js
// ✅ Basic async function
async function myFn() { return "value"; }

// ✅ Await a promise
const result = await somePromise();

// ✅ Error handling
try {
  const data = await riskyCall();
} catch (err) {
  console.error(err);
} finally {
  console.log("always runs");
}

// ✅ Parallel execution
const [a, b, c] = await Promise.all([fn1(), fn2(), fn3()]);

// ✅ Sequential execution
const token = await getToken();
const user  = await getUser(token);  // needs token from above

// ✅ Retry pattern
for (let i = 0; i < maxRetries; i++) {
  try { return await operation(); }
  catch (e) { if (i === maxRetries - 1) throw e; }
}
```

---

## 11. Key Rules to Remember

- `async` functions **always return a Promise**
- `await` can **only** be used inside an `async` function
- `await` pauses **only that function** — not the whole program
- Use **sequential** when steps depend on each other
- Use **`Promise.all`** when steps are independent (faster!)
- Use `try/catch/finally` for error handling
- After `await`, even a resolved Promise runs **after** synchronous code (microtask queue)

