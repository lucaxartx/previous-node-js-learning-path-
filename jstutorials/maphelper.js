// the map array helper is used to collect a specific attribute of an array(plucking) or even return a new modified array
 
// this will double each array element 
let numbers=[1,2,3,4,5]
const doublednumbers=numbers.map((number)=>{
    return number*2
})
console.log(doublednumbers)
 
let cars=[{model:"toyota",price:500},
    {model:"benz",price:900}
]
const prices=cars.map((car)=>{
    return car.price;
})
console.log(prices);