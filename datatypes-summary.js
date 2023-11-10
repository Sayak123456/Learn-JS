// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // JS is Dynamically defined
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 4379375938495789489n

console.log(typeof bigNumber); // bigint

// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sayak",
    age: "23",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); // object

console.log(typeof myFunction); // function

console.log(typeof anotherId); // symbol