function firstUniqueCharacter(str){
    const hashMap = new Map();
    
    for(let c of str){
        if(hashMap.has(c)){
           hashMap.set(c, hashMap.get(c) + 1);
        } else{
            hashMap.set(c, 1);
        }
    }
     
      for(let [key, value] of hashMap.entries()){
          if(value === 1)
            return str.indexOf(key);
      }
    
    return -1;
  }
  //Time Complexity: O(N) where N is the number of characters in the string.
  //Space Complexity: O(N) where N is the number of characters stored in
  // the hash table
  
  console.log(firstUniqueCharacter("abcabd"));
  console.log(firstUniqueCharacter("thedailybyte"));
  console.log(firstUniqueCharacter("developer"));
  console.log(firstUniqueCharacter(""));
  
  
  
  
  