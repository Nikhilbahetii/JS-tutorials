const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}
// for of loop
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
//  console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myobject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// NOt iterable above object

const object = {
    js: 'javascript',
    cpp: 'C++',
    swift: 'Swift',
    rb: 'Ruby',

}
// Forin loop used below in object
for (const key in object) {
    // console.log(object[key]);
    // console.log(`${key} shortcut is for ${object[key]}`);

}

const prog = ["Js", "CSS", "java", "py", "c"]
for (const key in prog) {
    console.log(prog[key]);
    
}