const nums = [1, 2, 3]

const total = nums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0 )

console.log(total);

const totall = nums.reduce( (acc, curr) => acc+curr, 0)
console.log(totall);


const shopcart = [
    {
        itemn: "js course",
        price: 2999
    },
    {
        itemn: "python",
        price: 2999
    },
    {
        itemn: "Web dev",
        price: 2999
    },
    {
        itemn: "Data Analyst",
        price: 2999
    }
]

const price = shopcart.reduce((acc, item) => acc + item.price, 0)
console.log(price);
