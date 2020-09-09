/* 
This question is asked by Facebook. Given a string, return whether or not it 
forms a palindrome ignoring case and non-alphabetical characters.
Note: a palindrome is a sequence of characters that reads the same 
forwards and backwards.

 */
function checkPalindrome(str){
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
  
  // Runtime: O(N) where n is the number of characters in the string.
  // Space complexity: O(N) because we need to create an array to check 
  // every character in the string.