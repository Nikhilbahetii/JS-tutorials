class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }    
    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}zedd`
    }
    set password(value){
        this._password = value
    }
}

const zedd = new user("zedd@gmail.com", "abc")
console.log(zedd.password);
console.log(zedd.email);

