function setusername (username){
    // complex DB calls
    this.username = username

}

function CreateUser (username, email, password){
    setusername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new CreateUser("Chai", "ok@gmail.com", "123")
console.log(chai);
