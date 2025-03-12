// ================================================
// ✅ JAVASCRIPT VARIABLES & KEYWORDS - FULL GUIDE
// ================================================

/*
 📌 1️⃣ What are Variables?
   - Variables are used to store data in JavaScript.
   - We use 'var', 'let', and 'const' to declare variables.
*/

// Declaring variables using var, let, and const
var name = "Kanishka";  // Can be re-declared & updated (Not recommended)
let age = 25;           // Can be updated but not re-declared
const country = "India"; // Cannot be updated or re-declared

console.log(name, age, country); // Output: Kanishka 25 India

// ================================================

/*
 📌 2️⃣ Difference between var, let, and const
   - 'var' is function-scoped, 'let' and 'const' are block-scoped.
   - 'const' cannot be changed after declaration.
*/

// Example of 'var' - Function Scoped
var x = 10;
var x = 20; // ✅ Allowed (Re-declaration allowed)

console.log(x); // Output: 20

// Example of 'let' - Block Scoped
let y = 15;
y = 25; // ✅ Allowed (Updating is allowed)
// let y = 30; // ❌ ERROR: Cannot re-declare 'let' in the same scope

console.log(y); // Output: 25

// Example of 'const' - Cannot be Changed
const pi = 3.14;
// pi = 3.14159; // ❌ ERROR: Assignment to constant variable

// ================================================

/*
 📌 3️⃣ Scope in JavaScript
   - Global Scope: Accessible anywhere.
   - Function Scope: Exists only inside a function.
   - Block Scope: Exists only inside { } (let and const only).
*/

// 🔹 Global Scope Example
let globalVar = "I am global";

function testScope() {
    console.log(globalVar); // ✅ Accessible inside the function
}
testScope();

// 🔹 Function Scope Example (var)
function functionScope() {
    var localVar = "I exist only inside this function";
    console.log(localVar); // ✅ Works inside function
}
// console.log(localVar); // ❌ ERROR: Not accessible outside function

// 🔹 Block Scope Example (let & const)
if (true) {
    let blockVar = "I exist only inside this block";
}
// console.log(blockVar); // ❌ ERROR: Not accessible outside block

// ================================================

/*
 📌 4️⃣ Hoisting in JavaScript
   - 'var' is hoisted and initialized as undefined.
   - 'let' and 'const' are hoisted but not initialized.
*/

// Hoisting with 'var'
console.log(hoistVar); // Output: undefined (because of hoisting)
var hoistVar = 50;

// Hoisting with 'let' and 'const'
// console.log(hoistLet); // ❌ ERROR: Cannot access before initialization
let hoistLet = 100;

// ================================================

/*
 📌 5️⃣ Best Practices for Variables
   - Use 'const' by default, unless you need to change the value.
   - Use 'let' if the variable will change.
   - Avoid using 'var' because it can cause scope issues.
*/

// ✅ Best way to declare variables
const MAX_USERS = 100; // Using 'const' for constants
let score = 80;        // Using 'let' for variables that change

console.log(MAX_USERS, score);

// ================================================

/*
 📌 6️⃣ More Examples
*/

// 🔹 Example 1: Using 'const' with Objects
const person = { name: "Amit" };
person.age = 30; // ✅ Allowed: We are modifying the object, not reassigning it
console.log(person); // Output: { name: 'Amit', age: 30 }

// 🔹 Example 2: Using 'const' with Arrays
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed: We are modifying the array
console.log(numbers); // Output: [1, 2, 3, 4]

// 🔹 Example 3: Naming Rules for Variables
let first_name = "John";  // ✅ Valid
let $price = 100;         // ✅ Valid
let _score = 90;          // ✅ Valid

// let 1stPlace = "Winner";  // ❌ ERROR: Cannot start with a number
// let function = "Test";    // ❌ ERROR: Cannot use reserved keywords

console.log(first_name, $price, _score);

// ================================================

/*
 📌 7️⃣ Summary
 ✅ 'var' is function-scoped, can be re-declared & updated. ❌ Avoid using.
 ✅ 'let' is block-scoped, cannot be re-declared, but can be updated.
 ✅ 'const' is block-scoped, cannot be updated or re-declared. Best for constants.
 ✅ 'let' and 'const' are hoisted but not initialized.
 ✅ Use 'const' for constants, 'let' for changeable values, and avoid 'var'.
*/

// ================================================
