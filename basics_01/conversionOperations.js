let score = "33av"
let valueNum = Number(score)
// console.log(typeof score)
// console.log(typeof valueNum)
// console.log(valueNum)  // NaN Not a Number
//"33" -> 33
//"23abc" -> NaN
//For boolean:
//true -> 1 false -> 0
//"" -> false  "jev" -> true
/************ OPERATIONS **************/
let str1 = "hey"
let str2 = "jev"

let str3=str1+str2
console.log(str3);

console.log("1"+2);  //12
console.log("1"+2+2); //122
console.log(1+2+"2");  //32

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" 

