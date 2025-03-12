// =========================================================
// ✅ JAVASCRIPT LOOPS - DETAILED GUIDE
// =========================================================

/*
 📌 1️⃣ What are Loops?
   - Loops help in executing the same block of code multiple times.
   - Instead of writing repetitive code, we use loops.
   - JavaScript provides different types of loops:
       1. for loop
       2. while loop
       3. do-while loop
       4. for-in loop (for objects)
       5. for-of loop (for arrays and iterable objects)
*/

// =========================================================

/*
 📌 2️⃣ for Loop
   - The most commonly used loop in JavaScript.
   - Syntax:
       for (initialization; condition; increment/decrement) {
           // Code to execute in each iteration
       }
*/

// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
// Output: 1, 2, 3, 4, 5

// Example: Print even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10

// =========================================================

/*
 📌 3️⃣ while Loop
   - The while loop executes as long as the condition is true.
   - Syntax:
       while (condition) {
           // Code to execute
       }
*/

// Example: Print numbers from 1 to 5 using while loop
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
// Output: 1, 2, 3, 4, 5

// =========================================================

/*
 📌 4️⃣ do-while Loop
   - Similar to the while loop, but executes at least once.
   - Syntax:
       do {
           // Code to execute
       } while (condition);
*/

// Example: Print numbers from 1 to 5 using do-while loop
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);
// Output: 1, 2, 3, 4, 5

// =========================================================

/*
 📌 5️⃣ for-in Loop (Used for Objects)
   - Used to loop through properties of an object.
   - Syntax:
       for (let key in object) {
           // Code to execute
       }
*/

// Example: Loop through an object
let person = {
    name: "Kanishka",
    age: 19,
    country: "India"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}
// Output:
// name: Kanishka
// age: 25
// country: India

// =========================================================

/*
 📌 6️⃣ for-of Loop (Used for Arrays)
   - Used to loop through elements of an array or iterable object.
   - Syntax:
       for (let value of iterable) {
           // Code to execute
       }
*/

// Example: Loop through an array
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Output: Apple, Banana, Mango

// =========================================================

/*
 📌 7️⃣ Nested Loops
   - Loops inside another loop.
*/

// Example: Print a 3x3 grid using nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Row ${i}, Column ${j}`);
    }
}
// Output:
// Row 1, Column 1
// Row 1, Column 2
// Row 1, Column 3
// Row 2, Column 1
// Row 2, Column 2
// Row 2, Column 3
// Row 3, Column 1
// Row 3, Column 2
// Row 3, Column 3

// =========================================================

/*
 📌 8️⃣ Real-World Example: Looping Through an Array
*/

// Example: Loop through an array and print elements
let students = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i]);
}
// Output: Alice, Bob, Charlie

// =========================================================

/*
 📌 9️⃣ Real-World Example: Sum of Numbers using Loop
*/

// Example: Find the sum of numbers from 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum:", sum);
// Output: 15

// =========================================================

/*
 📌 🔟 Summary
 ✅ The for loop runs a block of code a fixed number of times.
 ✅ The while loop runs a block of code while a condition is true.
 ✅ The do-while loop runs at least once, then checks the condition.
 ✅ The for-in loop is used to iterate over object properties.
 ✅ The for-of loop is used to iterate over arrays and iterables.
 ✅ Nested loops allow us to run loops inside loops.
*/

// =========================================================
