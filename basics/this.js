const user = {
    username: "zedd",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to webisite`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Kel"

// user.welcomeMessage()
// Browser ke andar global object "window" h when used this keyword in browser
console.log(this);

function Chari() {
    let username = "zedd"
    console.log(this.username);
    
}
Chari()

const chai = () => {
    let username = "zedd"
    console.log(this);
}

const add1 = (num1, num2) => {
    return num1 +num2
}
const add2 = (num1, num2) => ( num1 +num2)  //Implicit arror func
const add3 = (num1, num2) => ({username: "Hitesh"})
console.log(add3(4, 1));


