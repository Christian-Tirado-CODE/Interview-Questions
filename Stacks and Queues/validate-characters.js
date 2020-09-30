/*
This question is asked by Google. Given a string only containing the 
following characters (, ), {, }, [, and ] return whether or not the 
opening and closing characters are in a valid order.
*/
/*
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
 
 */

function validateCharacters(s) {
   var stack = [];
   for(c of s.split('')) {
       if(c == '(' || c == '[' || c == '{') {
           stack.push(c);
       } else if(c == ')' && (stack.length === 0 || stack[stack.length - 1] != '(')) {
           return false;
       } else if(c == ']' && (stack.length === 0 || stack[stack.length - 1] != '[')) {
           return false;
       } else if(c == '}' && (stack.length === 0 || stack[stack.length - 1] != '{')) {
           return false;
       } else {
           stack.pop();
       }
   }

   return stack.length === 0;
}
/*
"(){}[]", return true
"(({[]}))", return true
"{(})", return false
*/

console.log(validateCharacters("(){}[]"));
console.log(validateCharacters("(({[]}))"));
console.log(validateCharacters("{(})"));
//Time Complexity: O(N)
//Space Complexity: O(N)