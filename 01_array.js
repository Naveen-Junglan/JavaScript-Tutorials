
//console.log("Array Tutorial");
//console.log("<h1>");
const arr=[10,20,70,80,30,40,50,60,90];
//console.log(arr);
//console.log(arr.toSorted());//used to sort the given array


//const arrayName=new Array(1,2,3,4,5,6)
//console.log(arrayName)



// console.log(arr.sort());
//console.log("<br>")


//console.log("<ul>");
for(i=0;i<arr.length;i++){
// console.log("<li>"+arr[i]+"</li>");
}
//console.log("</ul>")


arr.push(10); //adds the element at the last position
//console.log(arr);
//console.log("<br>")


arr.pop();  //deletes the element from the last
//console.log(arr);
//console.log("<br>")




//console.log(arr[5]);
//console.log("<br>")



arr.shift(); //deletes the first element of an array
//console.log(arr);
//console.log("<br>")


arr.unshift(49); // adds the element at first (0th position)
//console.log(arr);
//console.log("<br>")



const A=arr.slice(1,6); //used to slice (get the specific part of an array)
// console.log("A="+arr);
// console.log("<br>"+A)
// console.log("<br>")

const B=arr.splice(1,6);
// console.log("B="+arr);
// console.log("<br>"+B)
// console.log("<br>")


const arr2=arr.join("*")
//console.log(arr2);
//console.log("<br><br>");

//console.log("Typeofarr2: "+typeof arr2);
//console.log("<br>")



//console.log(Array.isArray(arr)); //it will check whether the given value is array or not
//console.log("<br>")


const ar = [10, 20, 70, 80, 30, 40, 50, 60, 70, 90];
const index=ar.indexOf(70);  //returns the index of the given element
// console.log(index);


const lastIndex=ar.lastIndexOf(70); //same as indexOf but it will treverse from the last index of the given array
// console.log(lastIndex);



const include=ar.includes(40); //it will check whether the given element is present in the array or not
// console.log(include);


const str=ar.toString();  //converts the array into string
// console.log(str);
// console.log(typeof str);


// const f=ar.fill(90); //it will fill the given element in the array
// console.log(f);


ar.forEach(function(e){
// console.log(e+" hello")
})

ar.forEach((e)=>{
// console.log(e+" hello")
})


function  hello(e){
// console.log(e)
};
ar.forEach(hello)



const ar2=ar.map((e)=>{
    return e+5;
});
// console.log(ar2);



const array1=[10,20,30,40,50]
const array2=[110,120,130,140,150]


// array1.push(array2)
// console.log(array1)



// const array3=array1.concat(array2)
// console.log(array3)




const array3=[...array1,...array2]
// console.log(array3)



const another_arr=[1,2,3,[4,5],[5,6,7,[11,12,13]]]
const arr3=another_arr.flat(Infinity) //infinity is used to flat all the nested arrays if we don't know the depth of nested arrays and if we take 1 as a number then it will flat that number of nested arrays
// console.log(arr3)

const arr4=another_arr.flat(1)
// console.log(arr4)

// console.log(Array.isArray("NaveenSingh"))//it will check whether the given value is array or not
// console.log(Array.from("NaveenSingh"))//it will convert the string into array


// let score1=100
// let score2=200
// let score3=300
// let score4=400
// console.log(Array.of(score1,score2,score3,score4))//it will convert the given values into an array