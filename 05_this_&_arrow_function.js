//this - tells about current context

// const user = {
// 	name : "Naveen",
// 	sirname : "Junglan",

// 	welcomeMessage : function(){
// 		// console.log(`${this.name}, welcome to the website`)
// 	}
// }
// user.name = "Tinku"
// user.welcomeMessage()

//this keyword is used to access the object properties not function properties



// Arrow function
const sum = (a,b) => (a+b)   //in this line we can use () or not  & it is an implicit return   //arrow function syntax
// console.log(sum(2,3))


const user = () => ({username : "Naveen Singh"})    //if we are returning object then we have to use () in arrow function
// console.log(user())


const myArray = [1,2,3,4,5,12]
const newArray = myArray.map((item) => item*2);  //map is a function which is used to iterate over the array
// console.log(newArray);  

//............OR...........
// myArray.forEach(function () {})

//............OR...........
myArray.forEach(() => {});  //forEach is used to iterate over the array


//IIFE - Immediately Invoked Function Expression = is used to remove the polution of global variable scope 

 (function add(a, b) {
     return a + b  // it is an explicit return
  })(4,5); //it is an IIFE function if we use 2 IIFE, before it we use ; to separate the both function


  let len = myArray.length;      //to find the length of an array
  // console.log(length)


let length = myArray[myArray.length-1]    // to find the last element of an array
// console.log(length);


// for (let i = 0; i < myArray.length; i++)
    // console.log(myArray[i])  


// myArray.forEach((i) => console.log(myArray[i]))  //forEach is used to iterate over the array

const myArr =["naveen", "neha", "tinku", "sunny"]
for(let i of myArr){
	console.log(i)
}