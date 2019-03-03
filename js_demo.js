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
// const o = new Object();
// o.firstName = "Nam"
// o.lastName = "Truong"
// o.isWorking = true
// o.greet = function(){
//     console.log('hi!')
// }

// const o2 = {}
// o2.firstName = "Nam"
// o2['lastName'] = "Truong"
// const key = "isWorking"
// o2[key] = true
// o2['greet'] = function(){
//     console.log('hi!')
// }

// const o3 = {
//     1: 'test',
//     firstName : "Nam",
//     lastName : "Truong",
//     isWorking : true,
//     greet : function(){
//         console.log('hi!')
//     },
//     address: {
//         street: "number 5",
//         number: "36/2",
//     },
// }

// console.log(o)
// console.log(o2)
// console.log(o3)
// console.log(o3.1)       // error
// console.log(o3[1])          //  = console.log(o3["1"])

//-------------------------------
// Objects Mutation
const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    }
}

// const o2 = o
// o.a = 'new value'
// console.log(o2.a)       // new value

const o2 = Object.assign({}, o)
// o.a = 'new value'
// console.log(o2.a)            // a
// o.obj.key = 'new value'
// console.log(o2.obj.key)         // new value

//  deep copy
function deepCopy(obj){
    // check if vals are objects
    // if so. copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++){
        const key = keys[i]
        if(typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}

const o3 = deepCopy(o)
o.obj.key = 'new value!'
console.log(o3.obj.key)         // key



