const descr = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descr);

const chai = {
    name: "GInger",
    price: 250,
    Isavai: true,
    orderChai: function(){
        console.log('Chai nhi bani');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log((`${key} : ${value}`));
    }
}