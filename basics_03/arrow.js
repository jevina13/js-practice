const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);

// function chai(){
//     let username = "jev"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //undefined
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); //{}
// }


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //as it's one line function, it returns the value in same line

//if we write it in {} braces then we need to write return keyword else we can directly return it in one line using implicit function

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //to return an object in implicit method, we use () around the {}


//console.log(addTwo(3, 4))

