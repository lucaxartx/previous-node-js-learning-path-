// this helps search through an array and find a particular element of an array
let users=[
    {name:'obi'},
    {name:'kingsley'},
    {name:'marv'},
    {name:'ben'},

]

const printthis=users.find((user)=>{
  
        return user.name==='obi'

})
console.log(printthis);


//implementing with for loop  
var user;
for(let i=0;i<users.length;i++){
    if(users[i]==='obi')
    {
         user=users[i]
         break;
    }
}
// console.log(user);