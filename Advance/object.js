function mutliple (num){
    return num*5
}

mutliple.power = 2

console.log(mutliple(5));
console.log(mutliple.power);
console.log(mutliple.prototype);

function Create (username, score){
    this.username = username
    this.score =score
}

Create.prototype.increment = function(){
    this.score++
}
Create.prototype.print = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new Create("chai", 25)
const tea = new Create("tea", 250)

chai.print()