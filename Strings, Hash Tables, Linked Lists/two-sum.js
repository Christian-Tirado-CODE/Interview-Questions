/*
This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.

*/





function isTwoSum(numbers, k){
    
    if(numbers.length <= 1) return false;
  
    for(let i=0; i < numbers.length; i++){
        if(numbers[i] < k){
            for(let j= i + 1; j < numbers.length; j++){
                const twoSum = numbers[i] + numbers[j];
                if(twoSum === k) return true;
            }
        }
    }
  
  return false;
 
}

console.log(isTwoSum([1, 3, 8, 2], 10));
console.log(isTwoSum([3, 9, 13, 7], 8));
console.log(isTwoSum([4, 2, 6, 5, 2], 4));