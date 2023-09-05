// help to condense an array to a single value 
var nums=[1,2,3,4,5]

//using the reduce array helper 
var seeee=nums.reduce((sum,num)=>{
    return sum+num;
},1)// use one to show we started from value 1 ===> sum=1
console.log(seeee);



// implenting with a for loop 
// var sum=0
// for (var i =0;i<nums.length;i++){
//     sum+=nums[i]
// }
// console.log(sum);

//more examples 

var pricolors=[
    {color:"red"},
    {color:"blue"},
    {color:"green"}
    
  ]
  
  // we re returning an array with only the coloers of pricolors
  
  //using the reduce helper 
  
  pricolors.reduce(function (previous,pricolor){
    previous.push(pricolor.color)
    return previous;
  },[])
  // this code works on steven grinder's code playgroud 
//the user 0f [] is to show we start from an array ==> previous =[]  ==> an empty array  
console.log(pricolor)

//via for loops
var colorPicker=[]
for( var i =0;i<priColors.length;i++){
     colorPicker.push(priColors[i].color)
    }
    console.log(colorPicker)