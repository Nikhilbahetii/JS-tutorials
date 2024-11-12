let myHero = ["thor", "Ironman"]

let heropower = {
    thor: "hammer",
    Ironman: "Suit",

    getSpiderPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`Hitsh is present in all objects`);
    
}

Array.prototype.heyhitesh = function(){
    console.log(`Hitesh says hello`);
    
}

// heropower.hitesh()
myHero.hitesh()
myHero.heyhitesh()
// heropower.heyhitesh() 

// INheritance
const User = {
    name: "Chai",
    email: "Chai@gmail.com"
}
const tracher = {
    makevideo: true
}

const teachsupport = {
    isavailable: false
}
const TAsupport = {
    makeassign: 'JS assignment',
    fulltime: true,
    __proto__: teachsupport
}
// old approach
tracher.__proto__ = User

// Modern:
Object.setPrototypeOf(teachsupport, tracher)

let anotheruser = "ChaiaurcOde    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
    
}

anotheruser.trueLength()
"zedd".trueLength()
"iceTea".trueLength()