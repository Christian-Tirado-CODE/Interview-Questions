/*function isPalindrome(str){
    let isCharDeleted = false;
    const middle = Math.ceil(str.length / 2) + 1;
  
    if(str === null || str.length === 0) return true;
    
    for(let i=0; i < middle; i++){
   
        if(str[i] !== str[str.length - 1 - i]){
            if(isCharDeleted){
              return false;
            }else {
              str = str.slice(0, i - 1) + str.slice(i, str.length);
             
              isCharDeleted = true;
            }
        }
    }
  console.log(str);
  return true;  
}*/
// Time Complexity: O(N)
// Space Complexity: O(N) In the worst case The string has to copied

function validPalindrome(s) {
  let i = 0, j = s.length - 1;
  while(i < j) {
      if(s.charAt(i) != s.charAt(j)) {
          return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
      }

      i++;
      j--;
  }

  return true;
}

function isPalindrome(s, i, j) {
  while(i < j) {
      if(s.charAt(i++) != s.charAt(j--)) {
          return false;
      }
  }

  return true;
}
//Source: The Daily Byte
// Time Complexity: O(N)

console.log(validPalindrome("abcba"));
console.log(validPalindrome("foobof"));
console.log(validPalindrome("abccab"));

console.log(isPalindrome("abcba"));
console.log(isPalindrome("foobof"));
console.log(isPalindrome("abccab"));
