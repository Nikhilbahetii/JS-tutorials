const myarr = [1, 2, 3, 4]
const myarr2 = new Array(1, 0, 2,)

console.log(myarr2);
myarr.push(8)
console.log(myarr);

myarr.unshift(9)
myarr.shift()
console.log(myarr.includes(7));


const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "batman"]

const Hero = marvel.concat(dc)
console.log(Hero);

const all = [...marvel, ... dc]
console.log(all);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real = arr.flat(Infinity)
console.log(real);


console.log(Array.from("Zedd"));
console.log(Array.from({name: "Nikhil"})); //returns empty object as its not defined to show what value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
