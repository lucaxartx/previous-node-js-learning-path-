
// generators 
// function we can enter and exit multiple times and we see different results when its used
//each time
function *numbers(){
    yield;
}
const gen =numbers()
console.log(gen.next())
console.log(gen.next())

// another example 

function* colors(){
    yield "yellow"
    yield "pink"
    yield "blue"
    yield "green"
}
//  const gen2= colors()
//  console.log(gen2.next())// prints yelolow
//  console.log(gen2.next())// prints pink
//  console.log(gen2.next())

 // another approach 

 const selectedColors=[]
 for (let color of colors()){
    selectedColors.push(color)
 }
 console.log(selectedColors)


 // more 

 const testingTeam={
    lead:"julius",
    tester:"jill",
 }


 const engrTeam={
     testingTeam,
     size:4,
     dept:"engineering",
     lead:"lucas",
     manager:"jude",
     engineer:"udoh",
 }


 function* teamIterator(team){
    // destrucuring:
    const {lead,manager,engineer}=engrTeam
    yield lead;
    yield manager;
    yield engineer;

 }
 const names=[]
 for (let name of teamIterator(engrTeam)){
    names.push(name)
 }
 console.log(names)// prints only names 


 // using class

class comment {
    constructor(contnt,children){
        this.contnt=contnt
        this.children=children
    }
}
const children= [
    new comment("good comment ", []),
    new comment("bad comment ", []),
    new comment("meh", []),

]
const tree= new comment("great post ",children)
console.log(tree)