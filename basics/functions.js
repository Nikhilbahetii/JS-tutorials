function zedd(){
    console.log("h");
    console.log("a");
    console.log("d");
    console.log("n");
    console.log("t");   
}

// zedd()

// function Add(num1, num2){
//     console.log(num1 + num2);
// }
function Add(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = Add(3, 8)
console.log("Result: ",result);

function login(username){
    if(!username){
        console.log("Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(login())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Zedd",
    price: 500
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject({
    username: "sam",
    price: 100
})

const Array = [200, 400, 454, 600]

function returnsecond(getarray) {
    return getarray[1]
}

console.log(returnsecond(Array));
console.log(returnsecond([200, 400, 500]));
  