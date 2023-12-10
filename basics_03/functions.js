 console.log("J");
 console.log("E");
 console.log("V");
 console.log("I");
 console.log("N");
 console.log("A");
 
function sayName(){
    console.log("J");
 console.log("E");
 console.log("V");
 console.log("I");
 console.log("N");
 console.log("A");
}

sayName()  //this is to call the function

sayName //this is just the reference, it won't run

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }  here there is no return statement

function addTwoNumbers(number1, number2){ //here number1 and number2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)   //3 and 5 are arguments
// console.log("Result: ", result);

function loginUserMessage(username = "jev"){ //if the parameter is empty, it will use the default value and won't return undefined
    if(!username){  //this ! means if the username is false, i.e when it is undefined or empty
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage())  //if you don't pass argument, you get undefined as an output

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
 

