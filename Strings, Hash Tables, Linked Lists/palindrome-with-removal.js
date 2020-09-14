function isPalindrome(str){
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
}
// Time Complexity: O(N)
// Space Complexity: O(N) In the worst case The string has to copied

console.log(isPalindrome("abcba"));
console.log(isPalindrome("foobof"));
console.log(isPalindrome("abccab"));
