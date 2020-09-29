/*
This question is asked by Google. Given a string only containing the 
following characters (, ), {, }, [, and ] return whether or not the 
opening and closing characters are in a valid order.
*/

function validateCharacters(characters){
    var stack = [];
    var character;
   
    for(let i=0; i < characters.length; i++){
        if(characters[i] === "(" || characters[i] === "{" || characters[i] === "["){
           stack.push(characters[i]);
          
        } else{
            character = stack.pop();
            if(characters[i] === "]"){
               if(character !== "[") return false;
              
            } else if(characters[i] === "}"){
               if(character !== "{") return false;
               
            } else if(characters[i] === ")"){
               if(character !== "(") return false;
            }
        }
    }
   return true;
 }
 
 console.log(validateCharacters("(({[]}))"));
 console.log(validateCharacters("(){}[]"));
 console.log(validateCharacters("{(})"));
 
 