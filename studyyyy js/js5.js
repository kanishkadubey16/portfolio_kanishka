// ==================================================================
// ✅ SPREAD (`...`) & REST (`...`) OPERATORS IN JAVASCRIPT - FULL GUIDE
// ==================================================================

/*
📌 1️⃣ What is the Spread Operator (`...`)?
   - The spread operator (`...`) allows us to expand elements from arrays or objects.
   - It is mainly used for:
     ✅ Expanding an array into individual elements
     ✅ Copying an array or object (avoiding reference issues)
     ✅ Merging arrays or objects
*/

// ==================================================================

/*
📌 2️⃣ Example: Expanding an Array into Individual Elements
*/

const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // Output: 1 2 3 4 5

// Using spread to pass an array as function arguments
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...[10, 20, 30])); // Output: 60

// ==================================================================

/*
📌 3️⃣ Example: Copying an Array (Shallow Copy)
   - Spread operator is used to create a new copy of an array.
   - This prevents unintended modifications to the original array.
*/

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates a new independent array

copiedArray.push(4); // Modifies copiedArray, not originalArray

console.log(originalArray); // Output: [1, 2, 3]  (Unchanged)
console.log(copiedArray);  // Output: [1, 2, 3, 4]

// ==================================================================
/*
📌 4️⃣ Example: Merging Two Arrays
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// ==================================================================

/*
📌 5️⃣ Example: Using Spread with Objects
   - Spread can be used to copy and merge objects.
*/

const person = { name: "Alice", age: 25 };
const address = { city: "New York", country: "USA" };

// Merging objects
const personDetails = { ...person, ...address };

console.log(personDetails);
// Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }

// ==================================================================

/*
📌 6️⃣ Example: Updating an Object Without Mutating the Original
*/

const user = { name: "John", age: 30 };

// Creating a new object with an updated age
const updatedUser = { ...user, age: 31 };

console.log(updatedUser); // Output: { name: 'John', age: 31 }
console.log(user);        // Output: { name: 'John', age: 30 } (Unchanged)

// ==================================================================

/*
📌 7️⃣ What is the Rest Operator (`...`)?
   - The rest operator (`...`) allows us to group multiple elements into an array.
   - It is mainly used in:
     ✅ Function parameters to accept multiple arguments
     ✅ Destructuring arrays and objects
*/

// ==================================================================

/*
📌 8️⃣ Example: Using Rest Operator in Function Parameters
*/

function addNumbers(...nums) { // Collects all arguments into an array
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15

// ==================================================================

/*
📌 9️⃣ Example: Rest Operator in Destructuring Arrays
   - The first value is assigned, and the rest are grouped into an array.
*/

const [first, second, ...remainingNumbers] = [10, 20, 30, 40, 50];

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(remainingNumbers); // Output: [30, 40, 50]


// ==================================================================

/*
📌 🔟 Example: Rest Operator in Object Destructuring
*/

const student = {
    id: 101,
    name: "David",
    age: 22,
    grade: "A"
};

// Extracting `id` and storing the rest in `otherDetails`
const { id, ...otherDetails } = student;

console.log(id);            // Output: 101
console.log(otherDetails);  // Output: { name: 'David', age: 22, grade: 'A' }

// ==================================================================

/*
📌 1️⃣1️⃣ Difference Between Spread and Rest Operator
✅ `Spread` expands elements (used in function calls, arrays, and objects).
✅ `Rest` collects multiple elements into a single array or object.
*/

// Example:
function example(a, b, ...rest) { // `rest` collects remaining values
    console.log(a, b, rest);
}

example(1, 2, 3, 4, 5);
// Output: 1 2 [3, 4, 5]

// Spread example:
const nums = [1, 2, 3];
console.log(...nums); // Output: 1 2 3

// ==================================================================

/*
📌 1️⃣2️⃣ Summary of Spread and Rest Operators:
✅ The spread operator (`...`) expands arrays and objects.
✅ The rest operator (`...`) collects multiple values into an array.
✅ They help in function arguments, destructuring, and copying data efficiently.
*/

// ==================================================================
