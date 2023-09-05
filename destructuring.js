// the idea of destructuring is simply trying to reduce the amount of es5 code written 
// we can easily do this by just rewriting the same code in es6

var expense = {type:"personal",
    transport:'$1000',
    feeding:"$200",
    health:"$100"
}
// var transport=expense.transport; 
// var health=expense.health; 
// console.log(`your expense on transportation is ${expense.transport}`)

// es6 code 
const {transport,health} = expense
//or 
// let {health} = expense
console.log(`your expense on transportation is ${transport} and health is ${health}`)


// another example 
const files={
    name:'myfile',
    extension:'jpeg',
    size:140
}
function fileInfo({name,extension,size}){

    //  const {name,extension,size}=file;
    return ` ${name}.${extension} is ${size} large `
}
console.log(fileInfo(files))


//destructuring arrays 

const companies=[
    'google',
    'shell',
    'hp'
];
const [name,name2,name3]=companies
console.log("------")
console.log(name,name2,name3)

// function (){
//     return `${typeof} objects}`
// }
console.log(typeof name2)
 

//more example
function signup({name8,password,email,dob,city})
{
    //creates new user 
}
const user={
    name8:"lucas",
    email:"lucas@gmail.com",
    city:"ph",
    dob:1/4/1999,
    password:"mypassword"
}
console.log({dob,city}=user)

