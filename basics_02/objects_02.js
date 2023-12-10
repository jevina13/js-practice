const user = new Object()  //Singleton object

const user1 = {}  //non-singleton

user.id = "123abc"
user.name = "Sammy"
user.isLoggedIn = false


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jevina",
            lastname: "Verghese"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //it combines all the object in the '{}'

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "l@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]


//console.log("extra",users[1].email);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //this uses instructor to call any courseInstructor instead of using course.courseInstructor 
//that's called destructuring

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//APIs can be passed in arrays as well.. 
[
    {},
    {},
    {}
]