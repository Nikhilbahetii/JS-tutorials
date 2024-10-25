const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oj = mynums.map( (num) => num + 10)
console.log(oj);

const neww = mynums
              .map((num) => num * 10)
              .map((num) => num + 1)
              .filter( (num) => num >= 40)

console.log(neww);
