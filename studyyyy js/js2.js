
/*
 // =========================================================
// ✅ JAVASCRIPT CONDITIONAL STATEMENTS - DETAILED GUIDE
// =========================================================

/*
 📌 1️⃣ What are Conditional Statements?
   - Conditional statements are used to execute different code based on conditions.
   - They allow the program to make decisions.
   - Types of conditional statements in JavaScript:
       1. if statement
       2. if-else statement
       3. if-else-if ladder
       4. Nested if statement
       5. switch statement
       6. Ternary operator (Short-hand if-else)
       7. Logical operators (Used inside conditions)
*/

// =========================================================

/*
 📌 2️⃣ if Statement
   - Executes a block of code only if the condition is true.
   - Syntax:
       if (condition) {
           // Code to execute if condition is true
       }
*/

// Example:
let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day.");
}
// Output: It's a hot day.

// =========================================================

/*
 📌 3️⃣ if-else Statement
   - Executes one block if the condition is true, another if false.
   - Syntax:
       if (condition) {
           // Code if condition is true
       } else {
           // Code if condition is false
       }
*/

// Example:
let number = 10;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
// Output: Even number

// =========================================================

/*
 📌 4️⃣ if-else-if Ladder
   - Checks multiple conditions in sequence.
   - Syntax:
       if (condition1) {
           // Code if condition1 is true
       } else if (condition2) {
           // Code if condition2 is true
       } else {
           // Code if none of the conditions are true
       }
*/

// Example:
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// Output: Grade: C

// =========================================================

/*
 📌 5️⃣ Nested if Statement
   - One if statement inside another if statement.
   - Used for complex conditions.
*/

// Example:
let isMember = true;
let purchaseAmount = 500;

if (isMember) {
    if (purchaseAmount > 1000) {
        console.log("You get a 20% discount!");
    } else {
        console.log("You get a 10% discount!");
    }
} else {
    console.log("No discount available.");
}
// Output: You get a 10% discount!

// =========================================================

/*
 📌 6️⃣ switch Statement
   - Used when we need to compare a value against multiple cases.
   - Instead of multiple if-else statements, switch makes the code cleaner.
   - Syntax:
       switch (expression) {
           case value1:
               // Code for value1
               break;
           case value2:
               // Code for value2
               break;
           default:
               // Code if no case matches
       }
*/

// Example:
let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red.");
        break;
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "mango":
        console.log("Mango is sweet.");
        break;
    default:
        console.log("Unknown fruit.");
}
// Output: Mango is sweet.

// =========================================================

/*
 📌 7️⃣ switch with Multiple Cases
   - Multiple cases can be grouped together.
*/

// Example:
let day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a weekday.");
}
// Output: It's the weekend!

// =========================================================

/*
 📌 8️⃣ Ternary Operator
   - Short-hand for if-else.
   - Syntax:
       condition ? value_if_true : value_if_false;
*/

// Example:
let age = 18;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message);
// Output: Adult

// =========================================================

/*
 📌 9️⃣ Logical Operators in Conditions
   - && (AND) -> Both conditions must be true.
   - || (OR) -> At least one condition must be true.
   - ! (NOT) -> Reverses the condition.
*/

// Example using AND (&&)
let isLoggedIn = true;
let hasPremium = false;

if (isLoggedIn && hasPremium) {
    console.log("You have access to premium content.");
} else {
    console.log("Upgrade to premium!");
}
// Output: Upgrade to premium!

// Example using OR (||)
let userType = "admin";

if (userType === "admin" || userType === "moderator") {
    console.log("You have admin privileges.");
} else {
    console.log("You are a regular user.");
}
// Output: You have admin privileges.

// Example using NOT (!)
let isOnline = false;

if (!isOnline) {
    console.log("User is offline.");
} else {
    console.log("User is online.");
}
// Output: User is offline.

// =========================================================

/*
 📌 🔟 Real-World Example: Login System
*/

// Example:
let username = "admin";
let password = "pass123";

if (username === "admin" && password === "pass123") {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials.");
}
// Output: Login successful!

// =========================================================

/*
 📌 1️⃣1️⃣ Summary
 ✅ The if statement runs code only if a condition is true.
 ✅ The if-else statement runs one block if true, another if false.
 ✅ The if-else-if statement allows multiple condition checks.
 ✅ The nested if statement is used for complex conditions.
 ✅ The switch statement is useful for checking one value against multiple cases.
 ✅ The ternary operator is a short-hand for simple if-else conditions.
 ✅ Logical operators (&&, ||, !) help in writing complex conditions.
*/

// =========================================================
