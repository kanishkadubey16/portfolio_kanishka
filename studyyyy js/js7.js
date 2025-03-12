// ==========================================================
// ✅ 1️⃣ What is an Object in JavaScript?
// ==========================================================

/*
📌 Objects are used to store **key-value pairs**.
   - Unlike arrays (which use indexed positions), objects use **named properties (keys)**.
   - Objects allow us to store multiple values of different types in a structured way.
*/

// ✅ Creating an Object (Using Object Literal)
let person = {
    name: "Kanishka",
    age: 25,
    country: "India",
    isStudent: false
};

console.log(person);  
// Output: { name: 'Kanishka', age: 25, country: 'India', isStudent: false }

// ✅ Accessing Object Properties (Dot Notation & Bracket Notation)
console.log(person.name);      // Output: Kanishka
console.log(person["age"]);    // Output: 25

// ==========================================================
// ✅ 2️⃣ Adding, Updating, and Deleting Properties
// ==========================================================

// 🔹 Adding a new property
person.email = "kanishka@example.com";  

// 🔹 Updating an existing property
person.age = 26;   

// 🔹 Deleting a property
delete person.isStudent;  

console.log(person);  
// Output: { name: 'Kanishka', age: 26, country: 'India', email: 'kanishka@example.com' }

// ==========================================================
// ✅ 3️⃣ Nested Objects (Object Inside Object)
// ==========================================================

let student = {
    name: "Rahul",
    details: {
        age: 22,
        grade: "A",
        subjects: ["Math", "Science", "English"]
    }
};

// ✅ Accessing Nested Object Properties
console.log(student.details.age);         // Output: 22
console.log(student.details.subjects[1]); // Output: Science

// ==========================================================
// ✅ 4️⃣ Object Methods (Functions Inside Objects)
// ==========================================================

/*
📌 Objects can contain functions, called **methods**, that perform operations on object properties.
*/

let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    start: function () {
        return `The ${this.brand} ${this.model} is starting...`;
    }
};

console.log(car.start());  
// Output: The Tesla Model S is starting...

// ==========================================================
// ✅ 5️⃣ Looping Through an Object (`for...in` Loop)
// ==========================================================

// The `for...in` loop iterates over **all properties of an object**.

let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 350
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

/* Output:
title: JavaScript Guide
author: John Doe
pages: 350
*/

// ==========================================================
// ✅ 6️⃣ Checking If a Property Exists (`hasOwnProperty()`)
// ==========================================================

console.log(book.hasOwnProperty("author")); // Output: true
console.log(book.hasOwnProperty("price"));  // Output: false

// ==========================================================
// ✅ 7️⃣ Object Methods: `keys()`, `values()`, `entries()`
// ==========================================================

let smartphone = {
    brand: "Apple",
    model: "iPhone 13",
    price: 999
};

// 🔹 `Object.keys()` - Returns an array of keys
console.log(Object.keys(smartphone));  
// Output: [ 'brand', 'model', 'price' ]

// 🔹 `Object.values()` - Returns an array of values
console.log(Object.values(smartphone));  
// Output: [ 'Apple', 'iPhone 13', 999 ]

// 🔹 `Object.entries()` - Returns an array of key-value pairs
console.log(Object.entries(smartphone));  
/* Output:
[
  [ 'brand', 'Apple' ],
  [ 'model', 'iPhone 13' ],
  [ 'price', 999 ]
]
*/

// ==========================================================
// ✅ 8️⃣ Object Destructuring (Extracting Properties Easily)
// ==========================================================

let user = {
    username: "john_doe",
    email: "john@example.com",
    location: "New York"
};

// Destructuring
let { username, email, location } = user;

console.log(username); // Output: john_doe
console.log(email);    // Output: john@example.com
console.log(location); // Output: New York

// ==========================================================
// ✅ 9️⃣ Spread Operator with Objects (`...`)
// ==========================================================

let user1 = {
    name: "Alice",
    age: 28
};

// Creating a copy with additional properties
let user2 = { ...user1, city: "London" };

console.log(user2); 
// Output: { name: 'Alice', age: 28, city: 'London' }

// ==========================================================
// ✅ 🔟 Merging Two Objects (`Object.assign()` and Spread Operator)
// ==========================================================

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Using `Object.assign()`
let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1);  
// Output: { a: 1, b: 2, c: 3, d: 4 }

// Using Spread Operator
let merged2 = { ...obj1, ...obj2 };
console.log(merged2);  
// Output: { a: 1, b: 2, c: 3, d: 4 }

// ==========================================================
// ✅ 6️⃣ SHALLOW COPY VS DEEP COPY
// ==========================================================

/*
📌 Shallow Copy:
   - Only **copies references**, meaning changes in one object affect the other.
   - Methods: `Object.assign()`, Spread Operator (`...`)
   
📌 Deep Copy:
   - Creates a **completely independent** copy of an object.
   - Methods: `JSON.parse(JSON.stringify(obj))`, `structuredClone(obj)`
*/

// 🔹 SHALLOW COPY EXAMPLE
let obj1 = { a: 1, b: { c: 2 } };

// Creating a Shallow Copy using Spread Operator
let obj2 = { ...obj1 };  

// Modifying the nested object in obj2
obj2.b.c = 100;  

console.log(obj1.b.c);  // Output: 100 (Changes reflected in obj1 too!)
console.log(obj2.b.c);  // Output: 100

// 🔹 DEEP COPY EXAMPLE (Using JSON Methods)
let obj3 = JSON.parse(JSON.stringify(obj1));  // Creating a Deep Copy

// Modifying the nested object in obj3
obj3.b.c = 200;

console.log(obj1.b.c);  // Output: 100 (obj1 is unchanged)
console.log(obj3.b.c);  // Output: 200 (obj3 is independent)




// ==========================================================
// ✅ 🔟 INTERVIEW QUESTIONS ON OBJECTS
// ==========================================================

// 🔹 Q1: How do you check if an object is empty?
let emptyObject = {};

console.log(Object.keys(emptyObject).length === 0);  // Output: true

// 🔹 Q2: Convert an Object into an Array
let personDetails = { name: "Mike", age: 30, city: "Paris" };

let entriesArray = Object.entries(personDetails);
console.log(entriesArray);  
// Output: [ [ 'name', 'Mike' ], [ 'age', 30 ], [ 'city', 'Paris' ] ]

// ==========================================================
// ✅ 1️⃣1️⃣ SUMMARY OF JAVASCRIPT OBJECTS
// ==========================================================

/*
📌 Key Takeaways:
✅ Objects store key-value pairs.
✅ Properties can be added, updated, and deleted dynamically.
✅ Use dot notation (`object.property`) or bracket notation (`object["property"]`) to access values.
✅ `for...in` loops through properties of an object.
✅ Use `Object.keys()`, `Object.values()`, and `Object.entries()` for easy access.
✅ Spread operator (`...`) and `Object.assign()` help in copying and merging objects.
✅ Shallow Copy only copies references; Deep Copy creates a separate copy.
*/