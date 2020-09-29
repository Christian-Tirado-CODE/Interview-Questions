function isAnagram(s, t){
    const hashMap = new Map();
  
    for(let letter of s){
       hashMap.set(letter);
    }
  
    for(let letter of t){
       if(!hashMap.has(letter))
          return false;
    }
  
   return true;
}
//Time Complexity: O(s + t)
// Space Complexity: O(s)

console.log(isAnagram("cat", "tac"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("program", "function"));
