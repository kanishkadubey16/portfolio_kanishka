// ==========================================================
// ✅ JAVASCRIPT ASYNC & AWAIT - FULL GUIDE
// ==========================================================

/*
📌 1️⃣ WHAT IS ASYNC/AWAIT?
   - `async` and `await` are used to **handle asynchronous operations** in JavaScript.
   - They make asynchronous code **look and behave like synchronous code**.
   - `await` pauses the execution of a function **until** the Promise is resolved or rejected.
   - It helps to write cleaner and more readable asynchronous code than `.then()` and `.catch()`.
*/

// ==========================================================
// ✅ 2️⃣ CREATING AN ASYNC FUNCTION
// ==========================================================

/*
📌 `async` FUNCTION:
   - When a function is marked `async`, it **automatically returns a Promise**.
   - Inside an `async` function, we use `await` to **wait for a Promise to resolve**.
*/

// ✅ Example of an Async Function
async function greet() {
    return "Hello, Kanishka!"; // Automatically returns a Promise
}

// ✅ Calling the async function
greet().then((message) => console.log(message)); // Output: Hello, Kanishka!

// ==========================================================
// ✅ 3️⃣ USING `AWAIT` TO FETCH DATA
// ==========================================================

// ✅ Function simulating a delayed operation (like fetching data)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Data received successfully!");
        }, 3000); // Simulating 3-second delay
    });
}

// ✅ Async Function using `await`
async function getData() {
    console.log("📡 Fetching data...");
    let result = await fetchData(); // Wait until fetchData() resolves
    console.log(result);
}

// ✅ Calling the function
getData();

/*
📝 OUTPUT:
📡 Fetching data...
✅ Data received successfully! (after 3 seconds)
*/

// ==========================================================
// ✅ 4️⃣ ERROR HANDLING WITH `TRY...CATCH`
// ==========================================================

// ✅ Function simulating API request with success/failure
function fetchUserData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("✅ User data loaded!");
            } else {
                reject("❌ Error: Failed to load user data.");
            }
        }, 2000);
    });
}

// ✅ Async function handling errors with try...catch
async function loadUserData() {
    try {
        console.log("📡 Loading user data...");
        let data = await fetchUserData(false); // Change to `true` to simulate success
        console.log(data);
    } catch (error) {
        console.log(error); // Catches rejection
    }
}

// ✅ Call the function
loadUserData();

/*
📝 OUTPUT (if success = false):
📡 Loading user data...
❌ Error: Failed to load user data.
*/

// ==========================================================
// ✅ 5️⃣ MULTIPLE `AWAIT` CALLS IN A SINGLE FUNCTION
// ==========================================================

async function fetchMultipleData() {
    console.log("📡 Starting data requests...");

    let data1 = await fetchData();
    console.log("First data:", data1);

    let data2 = await fetchData();
    console.log("Second data:", data2);

    let data3 = await fetchData();
    console.log("Third data:", data3);

    console.log("✅ All data loaded!");
}

// ✅ Call the function
fetchMultipleData();

/*
📝 OUTPUT (after 9 seconds):
📡 Starting data requests...
First data: ✅ Data received successfully!
Second data: ✅ Data received successfully!
Third data: ✅ Data received successfully!
✅ All data loaded!
*/

// ==========================================================
// ✅ 6️⃣ `AWAIT` INSIDE A LOOP
// ==========================================================

// ✅ Function simulating a delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ✅ Async function using `await` inside a loop
async function processItems() {
    let items = ["Item 1", "Item 2", "Item 3"];

    for (let item of
