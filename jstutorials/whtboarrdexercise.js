// code to check if parameters are balanced or not 
function balancedparen(string){
    //converts the entered values(strings) to an array because we use array helpers
    // the use of"!" is as a flip to boolean so we can have true or false value where 0 is true and not zero is false 
    return !string.split("").reduce((previous,char)=>{
//increment the previous value to one if "(" and vice versa for "("
        if (previous<0){return previous}
        if (char==='('){

            return ++previous;
        }
        if (char===')'){
            return --previous;
        }
        return previous
        
    },0)  
} 
var see=balancedparen(")(()")
console.log(see);
