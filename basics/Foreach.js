const coding = ["js", "C++", "java", "Python", "CSS"]
coding.forEach( function (item) {console.log(item);
} )

coding.forEach( (value) => {
    // console.log(value);
    
} )

function Print(item) {
    // console.log(item);
}

coding.forEach(Print)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )

const mycode = [
    {
        langName: "Java",
        langfileName: "Jss"
    },
    {
        langName: "Python",
        langfileName: "Py"
    },
    {
        langName: "++",
        langfileName: "Py"
    }
]

mycode.forEach( (item) => {
    console.log(item.langName);
    
})