// Immediately Invoked Function Expressions (IIFE)

//this is named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //this is when a function is called and immediately executed
//use ; after the function to end it else it throws error
//it is used to avoid global scope pollution 

//this is unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')