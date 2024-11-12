class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const zup = new User("zedd")
// console.log(zup.createID())

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@gmail.com")
console.log(iphone.createID())
