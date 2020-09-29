const stonesAndJewels = (stones, jewels) => {
    let count = 0;
    const hashMap = new Map();
  
    for(let letter of stones){
      hashMap.set(letter)
    }
  
   
    for(let letter of jewels){
      if(hashMap.has(letter)) 
        count++;
    }
   
  return count;
}

//O(s + j) where s is the numbers of stones and j is the numbers of jewels.
//O(s) where s is the numbers of stones stored in the hashmap 

console.log(stonesAndJewels("abc", "ac"));
console.log(stonesAndJewels("Af", "AaaddfFf"));
console.log(stonesAndJewels("AYOPD", "ayopd"));