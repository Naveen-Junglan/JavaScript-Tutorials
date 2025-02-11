// Object Litrals 



const mySymbol = Symbol('key1');//it is just declaration of Symbol is a new data type in ES6
const ob = {
    name: 'Naveen',
    ["mySymbol"]: 'Junglan',//way to declare key as a string or symbol
    "full name": 'Naveen Junglan',
    age: 20,
    locaton: 'Bangalore',
    gmail: 'naveen@gmail.com'
}

// console.log(ob);//way to print the object
// console.log(typeof ob["mySymbol"]);//way to know the type of key

// console.log(ob.name);//or 
// console.log(ob["full name"]);// way to access key with space
// console.log(ob.age) 
// console.log(ob.key1)// way to access key with symbol
// console.log(ob["locaton"])//another way to access key

ob.age = 21;//way to update the value of key
// console.log(ob.age)

Object.freeze(ob);//it will freeze the object and we can not update the value of key
ob.age = 22;



//functions............................................................................

ob.myFun = function() {
    console.log('Hello World')
}
console.log(ob.myFun)//it will print the function;
