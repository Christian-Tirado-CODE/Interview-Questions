/* 
This question is asked by Facebook. Given a string, return whether or not it 
forms a palindrome ignoring case and non-alphabetical characters.
Note: a palindrome is a sequence of characters that reads the same 
forwards and backwards.

 */
/*function checkPalindrome(str){
    if(str.length === 0 || str.length === 1)
        return true;
    
    const arr = str.toLowerCase().split('').filter((char, index) => {
        return ((str.toLowerCase().charCodeAt(index) > 96) && (str.toLowerCase().charCodeAt(index) < 123))
    });
    const middle = Math.floor(arr.length / 2);
    
    for(let i=0; i < arr.length -1; i++){
        if(arr[i] === arr[(arr.length - 1) - i]){
            if(i === middle){
              return true;
            } 
        } else {
            return false;
        }
      }
  }
  
  console.log(checkPalindrome("A man, a plan, a canal: Panama."));
  console.log(checkPalindrome("algorithm"));
  console.log(checkPalindrome('"level"'));
  */
  // Runtime: O(N) where n is the number of characters in the string.
  // Space complexity: O(N) because we need to create an array to check 
  // every character in the string.
/*
  function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }*/

   function isPalindrome(str){
   
    if(str.length === 0 || str.length === 1)
      return true;
    
      const sanitisedString = [...str].map((char) => {
      const code = char.charCodeAt(0);
  
      if (code >= 97 && code <= 122) {
          return char;
      }
  
      if (code >= 65 && code <= 90) {
          return String.fromCharCode(code + 32);
      }
  }).join('');
    
    let i = 0;
    let j = sanitisedString.length - 1;
    
     while(i < j){
        if(sanitisedString[i] !== sanitisedString[j])
          return false;
       
       i++;
       j--;
     }
      return true;
   }
  
  //https://medium.com/@beccasusandev/string-palindrome-check-javascript-solution-c6166f14cb6f
  


   console.log(isPalindrome("A man, a plan, a canal: Panama."));
   console.log(isPalindrome("algorithm"));
   console.log(isPalindrome('"level"'));
    // Runtime: O(N) where n is the number of characters in the string.
  // Space complexity: O(1) because we only need a couple of variables to solve 
  //the problem regardless of the size of the problem.
  //SOURCE: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/