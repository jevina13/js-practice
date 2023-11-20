console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* The reason is that an equality check == and comparison > < >= work differently
Comparisions convert null to a number, treating it as 0.
that's why null >= 0 is true and null > 0 is false */

// === it is a strict check comparison. it doesn't comapare different datatypes

console.log("2"===2);  //false

 