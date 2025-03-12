// =========================================================
// ✅ JAVASCRIPT FUNCTIONS - DETAILED EXPLANATION WITH EXAMPLES
// =========================================================

/*
 💡 1⃣ What are Functions?
   - Functions are reusable blocks of code that perform a specific task.
   - Instead of writing the same code multiple times, we define a function and call it whenever needed.
   - Functions improve code reusability, readability, and maintainability.
   - JavaScript provides different ways to define functions.
*/

// =========================================================

/*
 💡 2⃣ How to Define a Function?
   - Functions are defined using the `function` keyword.
   - Syntax:
       function functionName(parameters) {
           // Code to execute
       }
   - To run the function, we need to "call" it.
*/

// Example 1: Simple function that prints a message
function sayHello() {
    console.log("Hello! Welcome to JavaScript functions.");
}

// Calling the function
sayHello(); // Output: Hello! Welcome to JavaScript functions.

// =========================================================

/*
 💡 3⃣ Function with Parameters (Passing Values)
   - Functions can accept values called parameters.
   - These values are used inside the function.
*/

// Example 2: Function with a parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Kanishka"); // Output: Hello, Kanishka!
greet("Alice");    // Output: Hello, Alice!

// =========================================================

/*
 💡 4⃣ Function with Multiple Parameters
   - We can pass multiple values (parameters) to a function.
*/

// Example 3: Function to add two numbers
function add(a, b) {
    console.log("Sum:", a + b);
}

add(5, 10);  // Output: Sum: 15
add(20, 30); // Output: Sum: 50

// =========================================================

/*
 💡 5⃣ Function with Return Value
   - Functions can return a value using the `return` keyword.
   - A return statement ends the function execution and sends a value back to the caller.
*/

// Example 4: Function that returns the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Storing returned value in a variable
let result = sum(7, 8);
console.log("Result:", result); // Output: Result: 15

// =========================================================

/*
 💡 6⃣ Function Expressions
   - Functions can be stored inside variables.
   - These are called function expressions.
*/

// Example 5: Function stored in a variable
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20

// =========================================================

/*
 💡 7⃣ Arrow Functions (ES6)
   - A shorter way to write functions using `=>` (arrow).
   - No need to write the `function` keyword.
   - If there is only one statement, `{}` and `return` can be omitted.
*/

// Example 6: Arrow function
const subtract = (a, b) => a - b;

console.log(subtract(10, 5)); // Output: 5

// Example 7: Arrow function with no parameters
const sayHi = () => console.log("Hi there!");
sayHi(); // Output: Hi there!

// Example 8: Arrow function with one parameter (no need for parentheses)
const square = n => n * n;
console.log(square(4)); // Output: 16

// =========================================================

/*
 💡 8⃣ Function with Default Parameters
   - We can set default values for parameters if no argument is provided.
*/

// Example 9: Function with default value
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetUser();       // Output: Hello, Guest!
greetUser("John"); // Output: Hello, John!

// =========================================================




// =========================================================

// =========================================================
// ✅ HIGHER-ORDER FUNCTIONS IN JAVASCRIPT - FULL GUIDE
// =========================================================

/*
📌 1️⃣ What are Higher-Order Functions?
   - A higher-order function (HOF) is a function that:
     ✅ Takes another function as an argument (callback function)
     ✅ Returns another function as a result
   - They allow us to write cleaner, reusable, and more modular code.
   - These functions are widely used in JavaScript, especially in array methods like `map`, `filter`, and `reduce`.
*/

// =========================================================

/*
📌 2️⃣ Example: Function taking another function as an argument
   - This allows us to pass behavior (function) as a parameter.
*/

// Function that takes another function as an argument
function performOperation(a, b, operation) {
    return operation(a, b); // Calls the function passed as an argument
}

// Different operations passed as functions
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Calling performOperation with different functions
console.log(performOperation(5, 3, add));        // Output: 8
console.log(performOperation(5, 3, multiply));   // Output: 15

// =========================================================

/*
📌 3️⃣ Example: Using Arrow Functions as Callbacks
   - Instead of writing separate functions, we can use arrow functions directly.
*/

console.log(performOperation(10, 2, (x, y) => x - y)); // Output: 8
console.log(performOperation(10, 2, (x, y) => x / y)); // Output: 5

// =========================================================

/*
📌 4️⃣ Example: Function Returning Another Function
   - A function can return another function, allowing us to create customized behavior.
*/

function createMultiplier(factor) {
    return (number) => number * factor; // Returns a function
}

// Creating functions using createMultiplier
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(4)); // Output: 8  (4 * 2)
console.log(triple(4)); // Output: 12 (4 * 3)

// =========================================================

/*
📌 5️⃣ Real-World Examples of Higher-Order Functions
   - JavaScript provides many built-in HOFs like:
     ✅ `map`     → Transforms each element in an array
     ✅ `filter`  → Selects elements based on a condition
     ✅ `reduce`  → Reduces array elements to a single value
*/

// Example: Using `.map()` to double each number in an array
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example: Using `.filter()` to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: Using `.reduce()` to sum all numbers in an array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// =========================================================

/*
📌 6️⃣ Practical Example: Sorting an Array of Objects
   - We can use HOFs like `.sort()` to sort an array of objects.
*/

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

// Sorting students by score (highest to lowest)
const sortedStudents = students.sort((a, b) => b.score - a.score);

console.log(sortedStudents);
// Output:
// [
//   { name: 'Bob', score: 92 },
//   { name: 'Alice', score: 85 },
//   { name: 'Charlie', score: 78 }
// ]

// =========================================================

/*
📌 7️⃣ Summary of Higher-Order Functions
✅ Higher-Order Functions take other functions as arguments OR return functions.
✅ They improve modularity, reusability, and code readability.
✅ Common HOFs in JavaScript:
   - `map()` → Transforms elements in an array.
   - `filter()` → Filters elements based on a condition.
   - `reduce()` → Reduces elements to a single value.
   - `sort()` → Sorts an array based on a condition.
✅ They are widely used in functional programming and JavaScript frameworks.
*/

// =========================================================
/*
 💡 Summary
 ✅ Functions make code reusable, organized, and readable.
 ✅ Function parameters allow passing data.
 ✅ `return` gives back a value to the caller.
 ✅ Arrow functions provide a shorter syntax.
 ✅ Higher-order functions take other functions as arguments.
 ✅ Callback functions are executed later.
 ✅ Rest parameters handle multiple arguments.
 ✅ Spread operator expands elements when calling a function.
*/