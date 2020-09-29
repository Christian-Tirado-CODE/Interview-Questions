/* 
This question is asked by Google. Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

*/



const intersectionOfNumbers = (nums1, nums2) => {
    const hashMap = new Map();
    const intersection = [];
    
    if(nums1.length === 0 || nums2.length === 0) return [];
    
    for(let n of nums1){
        hashMap.set(n, false);
    }
   
    for(let n of nums2){
        if(hashMap.has(n))
          hashMap.set(n, true);
    }
    
    
    for(let [key, value] of hashMap.entries()){
        if(value)
          intersection.push(key);
    }
    
   return intersection;
  }
  // Time Complexity: O(N) where N is the size of nums1 and nums2
  // Space Complexity: O(N) where N is the size of nums1.

  /* 
  Source: The Daily Byte
  Runtime: O(N) where N is the total number of elements in nums1 and nums2.
  Space complexity: O(M) where M is the total number of elements in nums1.
  */
  console.log(intersectionOfNumbers([2, 4, 4, 2], [2, 4]));
  console.log(intersectionOfNumbers([1, 2, 3, 3], [3, 3]));
  console.log(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7]));
  