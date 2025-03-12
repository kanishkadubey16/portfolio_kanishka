// ==========================================================
// ✅ JAVASCRIPT SYNCHRONOUS & ASYNCHRONOUS - FULL EXPLANATION
// ==========================================================

/*
📌 1️⃣ WHAT IS SYNCHRONOUS CODE?
   - Synchronous code runs **line by line**, in a sequential order.
   - Each operation must **complete before moving to the next**.
   - JavaScript is **single-threaded**, meaning it executes **one task at a time**.
*/

// ✅ Example of Synchronous Code:
console.log("Start of Synchronous Code");  // Step 1
console.log("Processing...");              // Step 2
console.log("End of Synchronous Code");    // Step 3

/* 
📝 Output:
Start of Synchronous Code
Processing...
End of Synchronous Code
*/

// Explanation:
// - Each statement executes **immediately** and **blocks the next statement** until it finishes.
// - The execution order is **predictable** and **sequential**.

// ==========================================================
// ✅ 2️⃣ WHAT IS ASYNCHRONOUS CODE?
// ==========================================================

/*
📌 ASYNCHRONOUS CODE:
   - Asynchronous code **does not block execution**.
   - It allows JavaScript to handle **other tasks while waiting** for an operation to complete.
   - JavaScript uses **callbacks, promises, and async/await** to handle asynchronous operations.
*/

// ✅ Example of Asynchronous Code using setTimeout()
console.log("Start of Asynchronous Code");

setTimeout(() => {
    console.log("Inside setTimeout - Runs after 2 seconds"); // Delayed Execution
}, 2000);

console.log("End of Asynchronous Code");

/* 
📝 Output:
Start of Asynchronous Code
End of Asynchronous Code
Inside setTimeout - Runs after 2 seconds
*/

// Explanation:
// - `setTimeout()` delays execution **without stopping the rest of the code**.
// - JavaScript **continues executing** the next statements without waiting for the timeout to complete.

// ==========================================================
// ✅ 3️⃣ SYNCHRONOUS VS ASYNCHRONOUS EXAMPLE
// ==========================================================

console.log("➡️ Start");

// Synchronous Task
for (let i = 0; i < 3; i++) {
    console.log(`Processing Step ${i + 1}`); // Executes immediately
}

// Asynchronous Task
setTimeout(() => {
    console.log("⏳ Asynchronous Task (setTimeout) - Runs after 3 seconds");
}, 3000);

console.log("➡️ End");

/* 
📝 Output:
➡️ Start
Processing Step 1
Processing Step 2
Processing Step 3
➡️ End
⏳ Asynchronous Task (setTimeout) - Runs after 3 seconds
*/

// Explanation:
// - The `for` loop is **synchronous**, so it runs **immediately** before the `setTimeout()` executes.
// - The `setTimeout()` runs **after 3 seconds**, allowing the code **to continue executing** before it completes.

// ==========================================================
// ✅ 4️⃣ REAL-LIFE EXAMPLE: ORDERING FOOD
// ==========================================================

/*
📌 Example:
   - Synchronous: You place an order, and you **wait** until it's ready before doing anything else.
   - Asynchronous: You place an order, but while waiting, you do **other tasks** like chatting.
*/

// ✅ Synchronous Order Processing
function orderFoodSync() {
    console.log("🍽 Placing order...");
    console.log("⏳ Waiting for food...");
    console.log("✅ Order is ready! Enjoy your meal!");
}
console.log("🛒 Synchronous Order Process:");
orderFoodSync();

/*
📝 Output:
🛒 Synchronous Order Process:
🍽 Placing order...
⏳ Waiting for food...
✅ Order is ready! Enjoy your meal!
*/

// ✅ Asynchronous Order Processing
function orderFoodAsync() {
    console.log("🍽 Placing order...");

    setTimeout(() => {
        console.log("✅ Order is ready! Enjoy your meal! (Delayed)");
    }, 3000);

    console.log("💬 Chatting while waiting...");
}
console.log("\n🛒 Asynchronous Order Process:");
orderFoodAsync();

/*
📝 Output:
🛒 Asynchronous Order Process:
🍽 Placing order...
💬 Chatting while waiting...
✅ Order is ready! Enjoy your meal! (Delayed after 3 sec)
*/

// Explanation:
// - **Synchronous:** The person **waits** for the food before doing anything else.
// - **Asynchronous:** The person **chats** while waiting for the food.

// ==========================================================
// ✅ 5️⃣ KEY TAKEAWAYS: SYNCHRONOUS VS ASYNCHRONOUS
// ==========================================================

/*
📌 KEY DIFFERENCES:
   ✅ Synchronous: Executes **line by line**, **blocking execution**.
   ✅ Asynchronous: **Does not block execution**, allowing **other tasks** to run.
   ✅ Asynchronous tasks use **setTimeout, Callbacks, Promises, Async/Await**.
*/

console.log("\n✅ JavaScript is Single-threaded, but Asynchronous allows better performance!");
