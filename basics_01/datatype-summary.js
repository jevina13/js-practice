/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. */
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //typeOf will give Object of null datatype
let userEmail;

//Symbol gives a return value but both the below values will be different from eachother
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];   // typeOf -> object
let myObj = {      // typeOf -> object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){    // typeOf -> function
    console.log("Hello world");
}

console.log(typeof anotherId); //typeOf -> Symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3