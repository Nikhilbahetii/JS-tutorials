// object literals

const mySym = Symbol("key1")

const Juser = {
    name: "Zedd",
    "Full Name": "Aston Martin",
    [mySym]: "mykey1",
    age: 22,
    location: "Kota",
    isLoggedIn: false,
    email: "nb@gmail.com",
    lastLoginDays: ["monday", "Saturday"]
}

console.log(Juser.email);
console.log(Juser["email"]);
console.log(Juser["Full Name"]);
console.log(Juser[mySym])

Juser.email = "Ok@gmail.com"
// Object.freeze(Juser)

Juser.greeting = function(){
    console.log(`HEllo JS user, ${this.name}`);
}

console.log(Juser.greeting());
