This document includes 10 coding questions for each of the following JavaScript topics:

- `map`
- `reduce`
- `filter`
- `object`
- `this` keyword
- `hoisting`
- `IIFE (Immediately Invoked Function Expression)`
- `arrow function`
- `asynchronous programming`
- `events`

---

## 🟢 map

1. Use `map` to double each number in `[1, 2, 3, 4]`.
2. Convert an array of strings to uppercase using `map`.
3. Extract the `name` property from an array of user objects.
4. Add 10 to every score in an array of student scores.
5. Use `map` to convert an array of Celsius temperatures to Fahrenheit.
6. Convert an array of numbers to strings.
7. Format an array of prices as currency (e.g., `"$12.00"`).
8. Use `map` to create an array of objects with keys `index` and `value`.
9. Capitalize the first letter of every word in an array.
10. Use `map` to reverse each string in an array.

---

## 🟡 reduce

1. Find the sum of all numbers in `[5, 10, 15, 20]`.
2. Calculate the product of all elements in `[2, 3, 4]`.
3. Count the number of times each letter appears in a string.
4. Use `reduce` to flatten a nested array `[[1], [2], [3]]`.
5. Create an object with the count of users by role from an array.
6. Find the longest word in an array of strings.
7. Use `reduce` to group words by their first letter.
8. Sum up the prices in a shopping cart array.
9. Find the maximum number in an array using `reduce`.
10. Concatenate all strings in an array into a single string.

---

## 🔵 filter

1. Filter out even numbers from `[1, 2, 3, 4, 5]`.
2. Get all names longer than 4 characters from an array of strings.
3. Remove falsy values from an array using `filter`.
4. Filter users who are active from an array of user objects.
5. Get all numbers greater than 100 from an array.
6. Return only strings from a mixed array.
7. Filter words that contain the letter “a”.
8. Filter prime numbers from an array.
9. Get students with grades `>= 60`.
10. Filter objects where a property is missing or `null`.

---

## 🟣 object

1. Create an object representing a car with keys: `make`, `model`, `year`.
2. Write a function that returns the keys of an object.
3. Merge two objects using the spread operator.
4. Delete a key from an object.
5. Check if a key exists in an object.
6. Loop over an object’s keys and log each key and value.
7. Write a function to count the number of keys in an object.
8. Convert an object to an array of key-value pairs.
9. Clone an object using `Object.assign()` and spread.
10. Create a nested object and access a deeply nested property.

---

## 🟠 this keyword

1. Log `this` inside a regular function.
2. Log `this` inside an object method.
3. Create a function where `this` changes depending on how it’s called.
4. Use `bind()` to permanently set `this`.
5. Use `call()` to invoke a function with a specific `this` context.
6. Use `apply()` to pass an array of arguments to a function with `this`.
7. Explain what `this` refers to in an event handler.
8. Show `this` in a constructor function.
9. Explain `this` behavior in strict mode.
10. Compare `this` in arrow functions vs regular functions.

---

## 🔴 hoisting

1. Predict the output of using a variable before declaring it with `var`.
2. What happens when calling a function before its declaration?
3. Demonstrate hoisting with `let` and `const`.
4. Rewrite a function so that hoisting no longer causes issues.
5. Explain why accessing a `let` variable before declaration throws an error.
6. Show how function expressions behave with hoisting.
7. Use hoisting to your advantage to reorder code.
8. Refactor a program to avoid hoisting bugs.
9. Log the value of a variable before and after initialization.
10. Demonstrate hoisting with multiple functions and variables.

---

## 🟤 IIFE (Immediately Invoked Function Expression)

1. Write a basic IIFE that logs "Hello".
2. Create an IIFE that returns a number.
3. Use an IIFE to create a private variable.
4. Wrap a loop in an IIFE to preserve the value of `i`.
5. Use IIFE to prevent polluting the global scope.
6. Write an IIFE that accepts parameters.
7. Create an IIFE that returns a function.
8. Use an IIFE to initialize settings once.
9. Make a counter using closures in an IIFE.
10. Create a module-like structure using IIFE.

---

## 🟢 arrow function

1. Convert a regular function to an arrow function.
2. Create a one-liner arrow function that squares a number.
3. Use an arrow function with `map()` to double values.
4. Write an arrow function with default parameters.
5. Demonstrate `this` inside an arrow function vs regular function.
6. Use an arrow function as a callback in `setTimeout`.
7. Return an object from an arrow function.
8. Use an arrow function to sum two numbers.
9. Use arrow functions in `filter()` and `reduce()`.
10. Compare function expressions and arrow functions.

---

## 🟣 asynchronous programming

1. Create a basic `setTimeout()` that logs after 2 seconds.
2. Use `setInterval()` to log every second.
3. Write a function that uses a callback after delay.
4. Create a promise that resolves after 1 second.
5. Use `.then()` to handle promise resolution.
6. Chain multiple promises together.
7. Use `async` and `await` to fetch fake data.
8. Convert a callback-based function to a promise-based one.
9. Handle errors using `.catch()` and `try-catch` with `async/await`.
10. Create a function that runs async tasks in sequence.

---

## 🔵 events

1. Add a click event listener to a button.
2. Change the background color of a div on mouseover.
3. Create a keydown event that logs key pressed.
4. Prevent a form from submitting using `preventDefault()`.
5. Create a button that toggles visibility of a paragraph.
6. Count how many times a button was clicked.
7. Change text input value on change event.
8. Use event delegation to handle multiple buttons.
9. Create a custom event and dispatch it.
10. Handle a window resize event and log new dimensions.
