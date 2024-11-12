const myArr = []
// %DebugPrint(myArr)

// contionious, Holey(have holes)

// SMI (small integer)
// Packed elements
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// Packed SMI Elements : BEst type os array conatins only integer 

arrTwo.push(6.0)
// Packed Double Elements

arrTwo.push('7')
// Packed Elements

arrTwo[10] = 11
// Holey elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOWnProperty (arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)
// Holes are very expensive in js

const arr3 = [1, 2, 3, 4, 5]
console.log(arr3[8]);

// SMI > Double > PACKED
// H_SMI > H_Double > H_Packed

const arrFour = new Array(3)
// Just 3 holes, Holey_SMI_Elements
arrFour[0] = '1'  //Holey_Elemnets
arrFour[1] = '1'  //Holey_Elemnets
arrFour[2] = '1'  //Holey_Elemnets

const arr5 = []
arr5.push('1') //Packed_elements
arr5.push('2') //Packed_elements
arr5.push('3') //Packed_elements

const arr6 = [1, 2, 3, 4, 5]
arr6.push(Infinity)

// for, for-of, foreach