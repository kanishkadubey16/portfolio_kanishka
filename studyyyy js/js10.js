// ==========================================================
// ✅ JAVASCRIPT PROMISES - FULL GUIDE
// ==========================================================

/*
📌 1️⃣ WHAT IS A PROMISE?
   - A Promise in JavaScript represents a **future value** or **event**.
   - It is used for handling **asynchronous operations** like:
     ✅ Fetching data from an API
     ✅ Reading files
     ✅ Database queries
   - Instead of using callbacks, Promises provide a **cleaner and more readable way** to handle async operations.
*/

// ==========================================================
// ✅ 2️⃣ PROMISE STATES
// ==========================================================

/*
📌 PROMISE HAS THREE STATES:
   1. **Pending**   → The initial state (waiting for a result).
   2. **Fulfilled** → The operation was successful.
   3. **Rejected**  → The operation failed.

   - We use `.then()` for success (fulfilled).
   - We use `.catch()` for errors (rejected).
   - We use `.finally()` for code that runs in both cases.
*/

// ==========================================================
// ✅ 3️⃣ CREATING A BASIC PROMISE
// ==========================================================

// ✅ Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to `false` to test rejection

    if (success) {
        resolve("✅ The operation was successful!"); // Promise fulfilled
    } else {
        reject("❌ The operation failed!"); // Promise rejected
    }
});

// ✅ Consuming the Promise
myPromise
    .then((message) => {
        console.log("THEN: ", message); // Runs if resolved
    })
    .catch((error) => {
        console.log("CATCH: ", error); // Runs if rejected
    })
    .finally(() => {
        console.log("FINALLY: The promise is complete."); // Runs always
    });

/*
📝 OUTPUT:
If success = true:
THEN: ✅ The operation was successful!
FINALLY: The promise is complete.

If success = false:
CATCH: ❌ The operation failed!
FINALLY: The promise is complete.
*/

// ==========================================================
// ✅ 4️⃣ SIMULATING A NETWORK REQUEST USING PROMISES
// ==========================================================

// ✅ Function that returns a Promise simulating a network request
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("📡 Fetching data from server...");

        setTimeout(() => {
            let success = true; // Change to `false` to test rejection
            if (success) {
                resolve("✅ Data received successfully!");
            } else {
                reject("❌ Failed to fetch data!");
            }
        }, 3000); // Simulating 3-second delay
    });
}

// ✅ Calling the function and handling the Promise
fetchData()
    .then((data) => {
        console.log("THEN: ", data);
    })
    .catch((error) => {
        console.log("CATCH: ", error);
    })
    .finally(() => {
        console.log("FINALLY: Request completed.");
    });

/*
📝 OUTPUT (After 3 seconds):
📡 Fetching data from server...
THEN: ✅ Data received successfully!
FINALLY: Request completed.
*/

// ==========================================================
// ✅ 5️⃣ CHAINING MULTIPLE PROMISES
// ==========================================================

// ✅ Example of Promise Chaining
function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: 🛠 Processing data...");
            resolve("Step 1 complete");
        }, 2000);
    });
}

function stepTwo(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 2: 🔍 Received from step 1 → ${previousData}`);
            resolve("Step 2 complete");
        }, 2000);
    });
}

function stepThree(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 3: ✅ Final step using → ${previousData}`);
            resolve("All steps completed!");
        }, 2000);
    });
}

// ✅ Executing the Promise Chain
stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then((finalMessage) => {
        console.log("🎉", finalMessage);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });

/*
📝 OUTPUT (After 6 seconds):
Step 1: 🛠 Processing data...
Step 2: 🔍 Received from step 1 → Step 1 complete
Step 3: ✅ Final step using → Step 2 complete
🎉 All steps completed!
*/

// ==========================================================
// ✅ 6️⃣ PROMISE.ALL() - MULTIPLE PROMISES IN PARALLEL
// ==========================================================

/*
📌 `Promise.all()`
   - Used to execute multiple Promises in **parallel**.
   - If **all** Promises resolve → `.then()` runs.
   - If **any** Promise rejects → `.catch()` runs.
*/

// ✅ Example: Running Multiple Promises Together
const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A ✅"), 2000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B ✅"), 3000));
const promiseC = new Promise((resolve, reject) => setTimeout(() => reject("Promise C ❌"), 4000));

Promise.all([promiseA, promiseB, promiseC])
    .then((results) => {
        console.log("ALL RESOLVED:", results);
    })
    .catch((error) => {
        console.log("❌ ONE FAILED:", error);
    });

/*
📝 OUTPUT (After 4 seconds):
❌ ONE FAILED: Promise C ❌
*/

// ==========================================================
// ✅ 7️⃣ PROMISE.RACE() - FIRST PROMISE TO COMPLETE WINS
// ==========================================================

/*
📌 `Promise.race()`
   - Resolves/rejects as soon as **one** of the Promises completes.
*/

Promise.race([promiseA, promiseB, promiseC])
    .then((winner) => {
        console.log("🏆 First to finish:", winner);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });

/*
📝 OUTPUT (After 2 seconds):
🏆 First to finish: Promise A ✅
*/

// ==========================================================
// ✅ 8️⃣ SUMMARY
// ==========================================================

/*
📌 Summary of Key Concepts:
✅ Promises handle async operations without callbacks.
✅ `.then()` handles success, `.catch()` handles errors.
✅ `.finally()` runs whether the Promise is resolved or rejected.
✅ `Promise.all()` waits for all Promises to resolve (fails if one rejects).
✅ `Promise.race()` resolves/rejects as soon as **one** completes.
*/

// ==========================================================
