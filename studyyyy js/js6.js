// =================================================================================
// ✅ JAVASCRIPT ARRAYS - DETAILED GUIDE WITH EXAMPLES
// =================================================================================

/*
📌 1️⃣ What is an Array in JavaScript?
   - An array is a special variable that can hold multiple values.
   - Arrays are **zero-indexed**, meaning the first element has an index of `0`.
   - JavaScript arrays are **dynamic** (they can grow and shrink).
*/

// Creating an array (different ways)
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = new Array(1, 2, 3, 4, 5); // Using Array constructor (Not recommended)

console.log(fruits);   // Output: ['Apple', 'Banana', 'Cherry']
console.log(numbers);  // Output: [1, 2, 3, 4, 5]

// =================================================================================

/*
📌 2️⃣ Accessing Elements in an Array
   - Elements in an array are accessed using their index.
*/

console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Getting the last element of an array
console.log(fruits[fruits.length - 1]); // Output: Cherry

// =================================================================================

/*
📌 3️⃣ Modifying an Array
   - Arrays are mutable, meaning we can modify their values.
*/

fruits[1] = "Mango";  // Changing 'Banana' to 'Mango'
console.log(fruits);  // Output: ['Apple', 'Mango', 'Cherry']

// =================================================================================

/*
📌 4️⃣ Adding & Removing Elements from Arrays
*/

// 🔹 push() → Adds an element at the end
fruits.push("Orange"); 
console.log(fruits); // Output: ['Apple', 'Mango', 'Cherry', 'Orange']

// 🔹 pop() → Removes the last element
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Mango', 'Cherry']

// 🔹 unshift() → Adds an element at the beginning
fruits.unshift("Grapes");
console.log(fruits); // Output: ['Grapes', 'Apple', 'Mango', 'Cherry']

// 🔹 shift() → Removes the first element
fruits.shift();
console.log(fruits); // Output: ['Apple', 'Mango', 'Cherry']

// =================================================================================

/*
📌 5️⃣ Finding Elements in an Array
*/

// 🔹 indexOf() → Finds the index of an element
console.log(fruits.indexOf("Mango")); // Output: 1

// 🔹 includes() → Checks if an element exists
console.log(fruits.includes("Apple")); // Output: true
console.log(fruits.includes("Banana")); // Output: false

// =================================================================================

/*
📌 6️⃣ Looping Through an Array
*/

// 🔹 Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 🔹 Using forEach() (Recommended)
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// =================================================================================

/*
📌 7️⃣ Array Methods for Transformation
*/

// 🔹 map() → Creates a new array by modifying each element
const numbersDoubled = numbers.map(num => num * 2);
console.log(numbersDoubled); // Output: [2, 4, 6, 8, 10]

// 🔹 filter() → Filters elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 🔹 reduce() → Reduces an array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15

// =================================================================================

/*
📌 8️⃣ Sorting and Reversing Arrays
*/

// 🔹 sort() → Sorts an array (default: alphabetically)
const sortedFruits = fruits.slice().sort(); // Creates a sorted copy
console.log(sortedFruits); // Output: ['Apple', 'Cherry', 'Mango']

// 🔹 reverse() → Reverses the array order
console.log(fruits.reverse()); // Output: ['Cherry', 'Mango', 'Apple']

// =================================================================================

/*
📌 9️⃣ Joining and Splitting Arrays
*/

// 🔹 join() → Converts an array to a string
console.log(fruits.join(" - ")); // Output: Cherry - Mango - Apple

// 🔹 split() → Converts a string to an array
const sentence = "Hello world JavaScript";
const wordsArray = sentence.split(" ");
console.log(wordsArray); // Output: ['Hello', 'world', 'JavaScript']

// =================================================================================

/*
📌 🔟 Advanced Array Methods
*/

// 🔹 concat() → Combines two arrays
const moreFruits = ["Pineapple", "Strawberry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Cherry', 'Mango', 'Apple', 'Pineapple', 'Strawberry']

// 🔹 slice() → Creates a new array by extracting elements
const someFruits = allFruits.slice(1, 4);
console.log(someFruits); // Output: ['Mango', 'Apple', 'Pineapple']

// 🔹 splice() → Removes or replaces elements
const removed = allFruits.splice(2, 1, "Blueberry"); // Removes 1 element at index 2 and adds "Blueberry"
console.log(allFruits); // Output: ['Cherry', 'Mango', 'Blueberry', 'Pineapple', 'Strawberry']

// =================================================================================

/*
📌 1️⃣1️⃣ Multidimensional Arrays (Nested Arrays)
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6 (Second row, third column)

// Looping through a nested array
matrix.forEach(row => {
    console.log(row.join(" ")); // Output: 1 2 3 \n 4 5 6 \n 7 8 9
});

// =================================================================================

/*
📌 1️⃣2️⃣ Summary of Arrays
✅ Arrays store multiple values and are zero-indexed.
✅ Can be modified using methods like push(), pop(), shift(), and unshift().
✅ Can be looped using for, forEach(), and map().
✅ Transformation methods include map(), filter(), and reduce().
✅ Sorting is done with sort(), and joining with join().
✅ slice() extracts elements, and splice() modifies the original array.
✅ Nested arrays can represent matrices or complex data structures.
*/


// ==========================================================
// ✅ 7️⃣ Spread & Rest Operators (...)
// ==========================================================

/*
📌 Spread Operator (`...`)
   - Used to spread elements of an array/object.
*/

// 🔹 Copy an array
let copiedArray = [...numbers];
console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// 🔹 Merge arrays
let moreNumbers = [6, 7, 8];
let mergedArray = [...numbers, ...moreNumbers];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*
📌 Rest Operator (`...`)
   - Used to collect multiple elements into an array.
*/

// Function with rest parameter
function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// ==========================================================
// ✅ 8️⃣ JavaScript Array Interview Questions
// ==========================================================

// 🔹 Question 1: Remove duplicates from an array
let duplicateArray = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

// 🔹 Question 2: Find the maximum number in an array
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 5

// ==========================================================
// ✅ 9️⃣ Summary
// ==========================================================

/*
📌 Summary of JavaScript Arrays:
✅ Arrays store multiple values in a single variable.
✅ They are dynamic and can contain mixed data types.
✅ Methods like push(), pop(), slice(), splice() help in modification.
✅ Iteration can be done using loops, forEach(), and map().
✅ Higher-order functions like filter(), map(), and reduce() make operations easier.
✅ Spread (`...`) is used for copying and merging, while Rest (`...`) collects arguments.
✅ Important interview questions include removing duplicates and finding the max number.
*/


// ==========================================================
// ✅ 3️⃣ `includes()` is Case-Sensitive!
// ==========================================================

let colors = ["Red", "Green", "Blue"];

// Checking for lowercase "red"
console.log(colors.includes("red")); // Output: false (case-sensitive)


// ==========================================================
// ✅ 5️⃣ Using `includes()` with Index
// ==========================================================

/*
📌 The `includes(value, startIndex)` syntax:
   - We can specify **where to start** searching by providing an index.
   - If the value exists at or after the given index, it returns `true`.
   - Otherwise, it returns `false`.
*/

let letters = ["a", "b", "c", "d", "e", "f"];

// Check if 'c' exists starting from index 2
console.log(letters.includes("c", 2)); // Output: true

// Check if 'a' exists starting from index 2
console.log(letters.includes("a", 2)); // Output: false (index 2 and after)


// ==========================================================
// ✅ 7️⃣ Interview Question: Checking Multiple Values in an Array
// ==========================================================

/*
📌 Q: Check if an array contains at least one of multiple values.
   - Example: Check if the array contains "Mango" OR "Grapes".
*/

// ✅ Using `some()`
let hasMangoOrGrapes = ["Mango", "Grapes"].some(fruit => fruits.includes(fruit));
console.log(hasMangoOrGrapes); // Output: true (Because "Mango" exists)

// ✅ Using a loop (Alternative method)
let valuesToCheck = ["Mango", "Grapes"];
let found = false;

for (let value of valuesToCheck) {
    if (fruits.includes(value)) {
        found = true;
        break;
    }
}
console.log(found); // Output: true

// ==========================================================
// ✅ 8️⃣ Summary of `includes()` Method
// ==========================================================

/*
📌 Key Takeaways:
✅ `includes()` checks if an array contains a specific value.
✅ Returns `true` if found, `false` if not.
✅ It is **case-sensitive**.
✅ `includes(value, startIndex)` allows checking from a specific index.
✅ Use `includes()` when you only need a `true/false` answer.
✅ For checking multiple values, use `.some()` or loops.
*/
