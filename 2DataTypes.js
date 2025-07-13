// JavaScript has several data types, which are divided into two main categories: primitive types and non-primitive (reference) types.

// -----------------------------------Primitive Data Types-(These are immutable and stored directly in the location the variable accesses).

// String - Represents text.

let name = "Naveen";
// console.log(name);

// Number - Represents both integers and floating-point numbers.

let age = 25;
// console.log(age);
let score = 95.5;
// console.log(score);


// BigInt - Represents very large integers.
let bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber);


// Boolean - Represents true or false.
let isActive = true;
// console.log(isActive);

// Undefined - A variable that has been declared but not assigned a value.
let x; // x is undefined

// Null - Represents the intentional absence of any value.
let user = null;
// console.log(user);

// Symbol - Unique and immutable value used as an object property key.
let sym = Symbol("id");
// console.log(sym);





// -----------------------------------Non-Primitive (Reference) Data Types-(These hold references to memory locations).

// Object - A collection of key-value pairs.

let person = {
  name: "John",
  age: 30
};
// console.log(person);

// Array (a type of object) - Ordered collection of values.
let colors = ["red", "green", "blue"];
// console.log(colors);

// Function (also a type of object) - Can be stored in variables and passed as arguments.

function greet() {
  return ("Hello");
}
// console.log(greet());


  


/*
Use typeof to Check Data Type

typeof "hello";      // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object"  ← (this is a known quirk in JavaScript)
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
*/