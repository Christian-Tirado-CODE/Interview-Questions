/*
This question is asked by Google. Given an array of integers, return whether or not
 two numbers sum to a given target, k.
Note: you may not sum a number with itself.

*/


/*
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
*/

function twoSum(nums, k) {
    const hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const difference = k - nums[i];
        if(hashMap.has(difference)) {
            return true;
        }

        hashMap.set(nums[i]);
    }

    return false;
}
/*
Runtime: O(N) where N is the number of integers in our list
Space complexity: O(N) because we use a hash map to store all N numbers in the 
worst case
*/

console.log(twoSum([1, 3, 8, 2], 10));
console.log(twoSum([3, 9, 13, 7], 8));
console.log(twoSum([4, 2, 6, 5, 2], 4));


