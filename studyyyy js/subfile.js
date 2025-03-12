// =========================================================
// ✅ JAVASCRIPT DATA TYPES - FULL EXPLANATION
// =========================================================

/*
 📌 1️⃣ What are Data Types?
   - In JavaScript, data types define what kind of values a variable can hold.
   - There are two main categories:
     1. **Primitive Data Types** (Stores values directly)
     2. **Reference Data Types** (Stores references to values)
*/

// =========================================================

/*
 📌 2️⃣ Primitive Data Types
   - These store actual values, not references.
   - There are **7 Primitive Data Types** in JavaScript:
     1. String
     2. Number
     3. Boolean
     4. Null
     5. Undefined
     6. Symbol
     7. BigInt
*/

// Example of Primitive Data Types:
let firstName = "Kanishka";  // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let salary = null;           // Null (Intentional empty value)
let job;                     // Undefined (Variable declared but not assigned)
let id = Symbol("id");       // Symbol (Unique identifier)
let bigNumber = 1234567890123456789012345n; // BigInt (For large numbers)

console.log(typeof firstName);  // Output: string
console.log(typeof age);        // Output: number
console.log(typeof isStudent);  // Output: boolean
console.log(typeof salary);     // Output: object (special case for null)
console.log(typeof job);        // Output: undefined
console.log(typeof id);         // Output: symbol
console.log(typeof bigNumber);  // Output: bigint

// =========================================================

/*
 📌 3️⃣ String Data Type
   - Represents text values.
   - Can be written in single (' '), double (" "), or backticks (` `).
*/

// String Examples:
let text1 = "Hello";
let text2 = 'World';
let text3 = `Welcome, ${firstName}`; // Template Literal (String Interpolation)

console.log(text1, text2, text3); 
// Output: Hello World Welcome, Kanishka

// =========================================================

/*
 📌 4️⃣ Number Data Type
   - Represents both integer and floating-point numbers.
   - Special values: NaN (Not a Number), Infinity, -Infinity.
*/

let num1 = 42;       // Integer
let num2 = 3.14;     // Float
let num3 = Infinity; // Infinity
let num4 = NaN;      // Not a Number

console.log(num1, num2, num3, num4); 

// =========================================================

/*
 📌 5️⃣ Boolean Data Type
   - Represents true or false values.
   - Used in condition checking.
*/

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn, hasPermission); // Output: true false

// =========================================================

/*
 📌 6️⃣ Null vs Undefined
   - Null: Intentionally empty value.
   - Undefined: Variable declared but not assigned.
*/

let emptyValue = null;
let notAssigned;

console.log(emptyValue, notAssigned); // Output: null undefined

// =========================================================

/*
 📌 7️⃣ Symbol Data Type
   - Used to create unique identifiers.
*/

let sym1 = Symbol("key");
let sym2 = Symbol("key");

console.log(sym1 === sym2); // Output: false (Each symbol is unique)

// =========================================================

/*
 📌 8️⃣ BigInt Data Type
   - Used for very large numbers.
   - Must have 'n' at the end.
*/

let largeNumber = 9007199254740991n; // BigInt
console.log(largeNumber + 1n); // Output: 9007199254740992n

// =========================================================

/*
 📌 9️⃣ Reference Data Types (Non-Primitive)
   - These store references to values instead of actual values.
   - Examples: Object, Array, Function.
*/

let person = { name: "Kanishka", age: 25 }; // Object
let numbers = [1, 2, 3, 4];                 // Array
function greet() { return "Hello!"; }       // Function

console.log(typeof person, typeof numbers, typeof greet); 
// Output: object object function

// =========================================================

/*
 📌 🔟 Type Conversion (Implicit & Explicit)
   - JavaScript automatically converts types (Implicit Conversion).
   - We can also manually convert types (Explicit Conversion).
*/

// 🔹 Implicit Type Conversion (Coercion)
console.log("5" + 5);   // Output: "55" (String + Number → String)
console.log("10" - 5);  // Output: 5 (String - Number → Number)

// 🔹 Explicit Type Conversion
console.log(Number("123")); // Converts string to number
console.log(String(100));   // Converts number to string
console.log(Boolean(1));    // Converts number to boolean (1 → true)

// =========================================================

/*
 📌 1️⃣1️⃣ Summary
 ✅ JavaScript has 7 primitive data types: String, Number, Boolean, Null, Undefined, Symbol, and BigInt.
 ✅ Objects, Arrays, and Functions are reference types.
 ✅ Null is an object (special case).
 ✅ Use `typeof` to check data types.
 ✅ Type conversion happens automatically (implicit) or manually (explicit).
*/

// =========================================================
