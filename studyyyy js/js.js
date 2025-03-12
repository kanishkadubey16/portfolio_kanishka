// =========================================================
// ✅ JAVASCRIPT OPERATORS - FULL EXPLANATION
// =========================================================

/*
 📌 1️⃣ What are Operators?
   - Operators perform operations on variables and values.
   - JavaScript has different types of operators:
     1. Arithmetic Operators
     2. Assignment Operators
     3. Comparison Operators
     4. Logical Operators
     5. Bitwise Operators
     6. Ternary Operator
*/

// =========================================================

/*
 📌 2️⃣ Arithmetic Operators
   - Used to perform basic mathematical operations.
   - Operators: + (Add), - (Subtract), * (Multiply), / (Divide),
                % (Modulus), ** (Exponentiation), ++ (Increment), -- (Decrement)
*/

// Examples:
let a = 10, b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.3333...
console.log(a % b);  // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation (10^3): 1000

// Increment & Decrement:
let count = 5;
console.log(++count); // Pre-Increment: 6
console.log(count++); // Post-Increment: 6 (then increases to 7)
console.log(--count); // Pre-Decrement: 6
console.log(count--); // Post-Decrement: 6 (then decreases to 5)

// =========================================================

/*
 📌 3️⃣ Assignment Operators
   - Used to assign values to variables.
   - Operators: =, +=, -=, *=, /=, %=, **=
*/

// Examples:
let x = 5;

x += 3;  // Equivalent to: x = x + 3 (Now x = 8)
x -= 2;  // Equivalent to: x = x - 2 (Now x = 6)
x *= 2;  // Equivalent to: x = x * 2 (Now x = 12)
x /= 3;  // Equivalent to: x = x / 3 (Now x = 4)
x **= 2; // Equivalent to: x = x ** 2 (Now x = 16)

console.log(x); // Output: 16

// =========================================================

/*
 📌 4️⃣ Comparison Operators
   - Used to compare two values and return a boolean (true/false).
   - Operators: ==, ===, !=, !==, >, <, >=, <=
*/

// Examples:
console.log(5 == "5");   // true (Checks only value, not type)
console.log(5 === "5");  // false (Strict equality, checks value & type)
console.log(10 != "10"); // false (Checks only value)
console.log(10 !== "10");// true (Strict inequality, checks type too)
console.log(8 > 5);      // true
console.log(8 < 5);      // false
console.log(8 >= 8);     // true
console.log(8 <= 9);     // true

// =========================================================

/*
 📌 5️⃣ Logical Operators
   - Used to combine multiple conditions.
   - Operators: && (AND), || (OR), ! (NOT)
*/

// Examples:
let hasMoney = true;
let hasCard = false;

console.log(hasMoney && hasCard); // false (Both must be true)
console.log(hasMoney || hasCard); // true (At least one must be true)
console.log(!hasMoney);           // false (Negates true to false)

// =========================================================

/*
 📌 6️⃣ Bitwise Operators
   - Works on binary numbers.
   - Operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift), >> (Right Shift)
*/

// Examples:
console.log(5 & 1);  // Output: 1 (Binary: 0101 & 0001 = 0001)
console.log(5 | 1);  // Output: 5 (Binary: 0101 | 0001 = 0101)
console.log(5 ^ 1);  // Output: 4 (Binary: 0101 ^ 0001 = 0100)
console.log(~5);     // Output: -6 (Binary NOT operation)
console.log(5 << 1); // Output: 10 (Left shift, 5 * 2)
console.log(5 >> 1); // Output: 2 (Right shift, 5 / 2)

// =========================================================

/*
 📌 7️⃣ Ternary Operator ( ? : )
   - Shorter way of writing if-else statements.
   - Syntax: (condition) ? value_if_true : value_if_false;
*/

// Example:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes

// =========================================================

/*
 📌 8️⃣ Operator Precedence
   - Determines which operator executes first.
   - Order: 
     1. () (Parentheses)
     2. ** (Exponentiation)
     3. *, /, % (Multiplication, Division, Modulus)
     4. +, - (Addition, Subtraction)
     5. <, >, <=, >= (Comparison)
     6. ==, ===, !=, !== (Equality)
     7. && (Logical AND)
     8. || (Logical OR)
*/

// Example:
let result = 5 + 3 * 2 ** 2 - (4 / 2);
console.log(result); // Output: 13 (Follows precedence rules)

// =========================================================

/*
 📌 9️⃣ Type Coercion with Operators
   - JavaScript automatically converts data types in some operations.
*/

// Examples:
console.log("5" + 2);  // Output: "52" (String + Number → String)
console.log("5" - 2);  // Output: 3 (String - Number → Number)
console.log(5 * "2");  // Output: 10 (String * Number → Number)
console.log(5 == "5"); // Output: true (Type coercion in comparison)

// =========================================================

/*
 📌 🔟 Summary
 ✅ Arithmetic Operators perform basic math.
 ✅ Assignment Operators assign values to variables.
 ✅ Comparison Operators compare values and return boolean results.
 ✅ Logical Operators combine multiple conditions.
 ✅ Bitwise Operators work with binary numbers.
 ✅ The Ternary Operator is a shorthand for if-else.
 ✅ Operator precedence decides execution order.
 ✅ Type coercion happens when different data types interact.
*/

// =========================================================
