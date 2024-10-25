const promise1 = new Promise(function(resolve, reject){
    // DO an async task
    // DB calls, 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async tsk 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "bahetikeshav.com"})
    }, 1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Zedd", password: "123"})
        }else{
            reject('ERROR')
        }
    }, 1000)
})

promise4
.then((user) => {
    console.log(user);
    return user.username    
})
.then((username) => {
    console.log(username);
    
})
.catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
// console.log(username);

const promise5 = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JSS", password: "12394"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumef(){
    try{
        const response = await promise5 //its object stored in variable
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumef()

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
        
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }


// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))