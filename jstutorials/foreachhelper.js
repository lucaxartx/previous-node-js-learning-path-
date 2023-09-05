//using for each array helper 
// it iterates through an array and return its values one by one


//this code sums up the entire array of numbers 
// create an array of numbers 
let numbers=[1,2,3,4,5]

//create variable to hold sum 
let sum =0
//looping over the array, incrementing sum value 
numbers.forEach((number)=>{
    sum+=number;
})

// we could also create a functionm seperately and call it 
function adder(number){
    sum+=number;
}
console.log(sum);
