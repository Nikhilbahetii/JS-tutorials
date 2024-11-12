class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeuser(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "ok@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.toUpperCase());

// // Behind the scene

function Userr(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Userr.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

const tea = new Userr("Chai", "ok@gmail.com", "123")

console.log(tea.encryptPassword());