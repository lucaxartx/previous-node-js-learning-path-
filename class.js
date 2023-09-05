// this is a constructor
function car(options){
    this.title=options.title
}

car.prototype.drive=function(){
    return 'vroom'
}


const car1=new car({title:"lambo"})

// console.log(car1.drive())
// console.log(car1)

//another constructor
function toyota(options){
    car.call(this,options)
    this.color=options.color
}
const toyota1= new toyota({color:"yellow",title:"town service"})
console.log(toyota1)

