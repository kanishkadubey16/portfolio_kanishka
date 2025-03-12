// ==========================================================
// ✅ JAVASCRIPT CALLBACKS, SETTIMEOUT & SETINTERVAL - FULL GUIDE
// ==========================================================

/*
📌 1️⃣ WHAT IS A CALLBACK FUNCTION?
   - A callback function is a function that is **passed as an argument** to another function.
   - It is executed **after the completion of that function**.
   - Callbacks are used to handle **asynchronous operations** like API calls, timers, and events.
*/

// ✅ Example of a Callback Function
function greet(name, callback) {
    console.log(`Hello, ${name}!`); // Step 1: Print greeting
    callback(); // Step 2: Execute the callback function
}

// Callback function
function afterGreeting() {
    console.log("This is a callback function running after greeting.");
}

// Calling function with callback
greet("Kanishka", afterGreeting);

/*
📝 Output:
Hello, Kanishka!
This is a callback function running after greeting.
*/

// Explanation:
// - `greet()` takes a `name` and a `callback` function.
// - First, it prints the greeting message.
// - Then, it **executes** the `callback` function, which prints another message.

// ==========================================================
// ✅ 2️⃣ CALLBACK FUNCTION IN ASYNCHRONOUS CODE (setTimeout)
// ==========================================================

/*
📌 ASYNCHRONOUS CALLBACKS:
   - Callbacks are mostly used in **asynchronous operations**.
   - `setTimeout()` delays the execution of a function.
*/

// ✅ Example: Asynchronous Callback using setTimeout()
function fetchData(callback) {
    console.log("Fetching data... Please wait...");
    
    setTimeout(() => {
        console.log("✅ Data fetched successfully!");
        callback(); // Calling the callback after data is fetched
    }, 2000);
}

// Callback function
function processData() {
    console.log("📊 Processing data...");
}

// Calling function with callback
fetchData(processData);

/*
📝 Output:
Fetching data... Please wait...
✅ Data fetched successfully!
📊 Processing data...
*/

// Explanation:
// - `fetchData()` simulates data fetching and waits for 2 seconds before executing the callback function `processData()`.
// - The function **does not block** other tasks while waiting.

// ==========================================================
// ✅ 3️⃣ WHAT IS setTimeout()?
// ==========================================================

/*
📌 `setTimeout()`
   - It is used to **execute a function after a specified delay** (milliseconds).
   - The function runs **once** after the delay.
   - Commonly used in animations, delays, and API calls.
*/

// ✅ Example: Using setTimeout()
console.log("Start of script");

setTimeout(() => {
    console.log("This message appears after 3 seconds!");
}, 3000);

console.log("End of script");

/*
📝 Output:
Start of script
End of script
This message appears after 3 seconds!
*/

// Explanation:
// - `setTimeout()` schedules a function to run **after** 3 seconds.
// - Meanwhile, JavaScript **continues executing** the remaining code.

// ==========================================================
// ✅ 4️⃣ WHAT IS setInterval()?
// ==========================================================

/*
📌 `setInterval()`
   - It is used to **execute a function repeatedly at fixed intervals**.
   - The function keeps running until **clearInterval()** is called.
*/

// ✅ Example: Using setInterval()
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`⏳ Timer running... Count: ${count}`);
    
    // Stop after 5 iterations
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval
        console.log("✅ Timer stopped after 5 counts.");
    }
}, 1000);

/*
📝 Output (one message per second):
⏳ Timer running... Count: 1
⏳ Timer running... Count: 2
⏳ Timer running... Count: 3
⏳ Timer running... Count: 4
⏳ Timer running... Count: 5
✅ Timer stopped after 5 counts.
*/

// Explanation:
// - `setInterval()` executes a function every **1 second**.
// - `clearInterval(intervalId)` stops the execution after **5 repetitions**.

// ==========================================================
// ✅ 5️⃣ REAL-LIFE SCENARIO: LOADING SCREEN
// ==========================================================

/*
📌 Scenario:
   - Show a "Loading..." message at intervals.
   - Stop it when the data is fetched.
*/

// ✅ Example: Simulating a Loading Screen
console.log("⏳ Fetching data, please wait...");

const loading = setInterval(() => {
    console.log("🔄 Loading...");
}, 1000);

setTimeout(() => {
    clearInterval(loading);
    console.log("✅ Data fetched successfully!");
}, 5000);

/*
📝 Output:
⏳ Fetching data, please wait...
🔄 Loading...
🔄 Loading...
🔄 Loading...
🔄 Loading...
🔄 Loading...
✅ Data fetched successfully!
*/

// Explanation:
// - The loading message prints every **1 second** (`setInterval()`).
- After **5 seconds**, the loading stops (`clearInterval()`).

// ==========================================================
// ✅ 6️⃣ DIFFERENCE BETWEEN setTimeout() & setInterval()
// ==========================================================

/*
📌 Differences:
   ✅ `setTimeout()` runs **once** after a delay.
   ✅ `setInterval()` runs **repeatedly** at intervals.
   ✅ `clearTimeout()` stops `setTimeout()`, while `clearInterval()` stops `setInterval()`.
*/

// ✅ Example: Stopping setTimeout()
const timeoutId = setTimeout(() => {
    console.log("This will NOT be printed because it's stopped.");
}, 2000);

// Stopping the timeout before it executes
clearTimeout(timeoutId);

console.log("🚀 clearTimeout() stopped the execution before it started.");

/*
📝 Output:
🚀 clearTimeout() stopped the execution before it started.
*/

// ==========================================================
// ✅ 7️⃣ SUMMARY
// ==========================================================

/*
📌 Summary of Key Concepts:
✅ Callback functions allow passing a function as an argument to another function.
✅ `setTimeout()` executes a function **once** after a delay.
✅ `setInterval()` executes a function **repeatedly** at fixed intervals.
✅ Use `clearTimeout()` to stop a `setTimeout()`.
✅ Use `clearInterval()` to stop a `setInterval()`.
*/

// ==========================================================
