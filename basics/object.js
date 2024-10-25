const tinderUser = {}
tinderUser.id = "456xyz"
tinderUser.name = "Zedd"
tinderUser.isLoggedIn = false

const regularuser = {
    email: "cs@gmail.com",
    fullname: {
        userfullname: {
            first: "Nik",
            Second: "Cool"
        }
    }
}
// console.log(regularuser.fullname);

const obj = {1: "a", 2: "b"}
const obj1 = {3: "a", 4: "b"}
// const obj3 = Object.assign({}, obj, obj1)
const obj3 = {...obj, ...obj1}
console.log(obj3);

const  users = [
    {
      id: 1,
      email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
      },
    {
      id: 1,
      email: "ok@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS",
    Fee: "999",
    courseinstructor: "zedd"
}
const {courseinstructor: instructor} = course
console.log(instructor);

{


}
[
    {},
    {},
    {}
]