// help to condense an array to a single value 

// this program checks if a list of computers with above 16 ram 



var computers=[
    {name:'apple',ram:18},
    {name:'acer',ram:12},
    {name:'hp',ram:4}
]

// via the every array helper

var everyval= computers.every((computer)=>{
    return computer.ram<16;
})
console.log(everyval);


var somevals= computers.some((computer)=>{
    return computer.ram<16;
})
console.log(somevals);

var allcomputercanrun = true;
var onlysome=false
for(let i= 0; i<computers.length;i++){
    // let computer=computers[i]
    if(computers[i].ram<16){
        allcomputercanrun=false

    }else{
        onlysome=true
    }
}
// console.log(allcomputercanrun);
// console.log(onlysome);
