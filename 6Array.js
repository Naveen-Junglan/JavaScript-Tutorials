/*
====================Array in JS

collection of elements in memory, Elements can be different type of data (such as the string, number, boolean etc)

*/

const myArray = [1, 2, 3, 4, 5, 6]; //declaring an array

// console.log(myArray[3]); //Accessing an element of array.

const myArray2 = new Array(10, 20, 30, 40, 50, 60); //2nd way to declare the array

// myArray.push(7); //adds an elemet at the last position/index.

// myArray.pop(); //removes an elemet from the last position/index.

// myArray.unshift(0); //adds an elemet at the 0th position/index.
// myArray.shift(); //removes an elemet from the 0th position/index.
// console.log(myArray.join());//convert array into the string.
// console.log(myArray.includes(9)); //returns true is element exists in the array
// console.log(myArray.indexOf(8)); //returns index no. if element doesn't exist returns -1
// console.log(myArray.find(5)); //returns index no. if element doesn't exist returns error

const sli = myArray.slice(1,4);
console.log(sli);
console.log("A= ", myArray);

const spli = myArray.splice(1, 4);
console.log(spli);
console.log("B= ", myArray);

// console.log("A= ",myArray);