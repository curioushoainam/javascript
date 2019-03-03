// console.log("Hello, world!")

//-------------------------------
// Javascript Syntax

// const firstName = "Nam"
// const lastName = "Truong"

// const val = 42

// const arr = [
//     'string',
//     42,
//     function(){
//         console.log('hi')
//     }
// ]

// arr[2]()

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

//-------------------------------
// Javascript Types
// Dynamic typing
// Primitive types (no methods, immutable)
//      undefined
//      null
//      boolean
//      number
//      string
//      (symbol)
// Objects
// const x = 42;
// const explicit = String(x);         //  explicit === "42"
// const implict = x + "";             //  implicit === "42"

// console.log(typeof x);              // number

// console.log(typeof null);           // object

// https://dorey.github.io/JavaScript-Equality-Table/

//-------------------------------
// Javascript Object
const o = new Object();
o.firstName = "Nam"
o.lastName = "Truong"
o.isWorking = true
o.greet = function(){
    console.log('hi!')
}

const o2 = {}
o2.firstName = "Nam"
o2['lastName'] = "Truong"
const key = "isWorking"
o2[key] = true
o2['greet'] = function(){
    console.log('hi!')
}

const o3 = {
    1: 'test',
    firstName : "Nam",
    lastName : "Truong",
    isWorking : true,
    greet : function(){
        console.log('hi!')
    },
    address: {
        street: "number 5",
        number: "36/2",
    },
}

// console.log(o)
// console.log(o2)
// console.log(o3)
// console.log(o3.1)       // error
// console.log(o3[1])          //  = console.log(o3["1"])



