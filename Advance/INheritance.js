class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Zedd", "zedd@gmail.com", "123")
chai.addcourse()

const masalaChai = new User("masalachai")
masalaChai.logMe()

console.log(chai instanceof Teacher);
