/*
This question is asked by Google. Given a string, return whether or not it uses 
capitalization correctly. A string correctly uses capitalization if all letters 
are capitalized, no letters are capitalized, or only the first letter is 
capitalized.
*/

/* 
function isUpperCase(str, index){
    const code = str.charCodeAt(index);
    return (code > 64 && code < 91);
  }
  
  
  function isCapitalizedCorrectly(str){
      let isUpperFound = false, isLowerFound = false;
      const charCode = str.charCodeAt(0);
    
      if(str.length === 0)
          return false;
         
      if(isUpperCase(str, 0)){
          for(let i= 1; i < str.length; i++){
              if(isUpperFound && isLowerFound)
                return false;
              if(isUpperCase(str, i))
                isUpperFound = true;
              else 
                isLowerFound = true;
          }
      } else {
            for(let i= 1; i < str.length; i++){
                if(isUpperFound)
                  return false;
                if(isUpperCase(str, i))
                  isUpperFound = true;
            }
      }
    
    return true;
  } */
  /*
  Time Complexity: O(n)
  Space Complexity: O(1)-Constant
  */

 function isCapitalizedCorrectly(word){
  let count = 0;
  
  for(let i=0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase())
      count++;
  }
  
  return ((count === word.length || (count === 0) || (count === 1 && word[0] === word[0].toUpperCase())));
}
//SOURCE: THE DAILY BYTE
  
  console.log(isCapitalizedCorrectly("USA"));
  console.log(isCapitalizedCorrectly("Calvin"));
  console.log(isCapitalizedCorrectly("compUter"));
  console.log(isCapitalizedCorrectly("coding"));