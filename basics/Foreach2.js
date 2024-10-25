const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const neww = mynums.filter( (num) => num > 4)
console.log(neww);

const newww = mynums.filter( (num) => {
    return num > 4
})

const nott = []

mynums.forEach( (num) => {
    if (num > 4) {
        nott.push(num)
    }
})

console.log(nott);
