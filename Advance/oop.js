const user = {
    username: "zedd",
    logincount: 8,
    singedin: true,

    getuser: function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.singedin);
// console.log(user.getuser());
// console.log(this);

// const promise1 = new Promise()  //new -> constructor function

function User(username, logincount, isLoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedin = isLoggedin;
    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this
}

const userone = new User("Hitesh", 12, true)
const usertwo = new User("Chai", 11, false)
console.log(userone.constructor);
// new : Create new object
// Constructor function call karta h 'new'
// Then pack the values in the function