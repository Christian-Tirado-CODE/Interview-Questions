const findUncommonWords = (sentence1, sentence2) => {
    const uncommonWords = [];
    let hashSet = new Map();
    for(let word of sentence1.split(' ')){
        if(hashSet.has(word))
          hashSet.set(word, hashSet.get(word) + 1);
        else
          hashSet.set(word, 1);
    }
  
    for(let word of sentence2.split(' ')){
        if(hashSet.has(word))
          hashSet.set(word, hashSet.get(word) + 1);
        else
          hashSet.set(word, 1);
    }
    
    for(let [key, value] of hashSet.entries()){
        if(value === 1)
          uncommonWords.push(key);
    }

  
  return uncommonWords;
}
// Time Complexity: O(N + M) where N is the size of sentence1 and sentence2
//Space Complexity: O(N + M) where N is the size of  sentence1 and sentence2

console.log(findUncommonWords("the quick", "brown fox"));
console.log(findUncommonWords("the tortoise beat the haire", "the tortoise lost to the haire"));
console.log(findUncommonWords("copper coffee pot", "hot coffee pot"));
