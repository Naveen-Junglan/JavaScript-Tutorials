// console.log("Naveen Singh Junglan");


/* 
Const => value cannot change while using const 
It is used where we don't need to change the value 
 ________Block scoped
*/ 

// const name = "Naveen Singh Junglan"
// function printName() {
//     if (true) {
//         const name = "Tinku Singh";
//         console.log(`My nick name is ${name}`);
//     }
//     console.log(`My name is ${name}`);
// }
// printName()


// const a = 12;
// const b = 10;
// console.log("Output => ",(a+b))

// console.table([a, b])
// returns the values into tabular form........ only takes array to print the multiple values as index and values

/*
var => not good for using var we prefer the let and const.....
_______function scoped
*/

// var name = "Naveen Singh Junglan"
// function printName(){
//     if (true) {
//         var name = "Tinku Singh";
//         console.log(`My name is ${name}`);
//     }
//     console.log(`My nick name is ${name}`);
// }
// printName()



/*
let => Block scoped

*/
let name = "Naveen Singh Junglan"
function printName(){
    if (true) {
        let name = "Tinku Singh";
        console.log(`My nick name is ${name}`);
    }
    console.log(`My name is ${name}`);
}
printName()

