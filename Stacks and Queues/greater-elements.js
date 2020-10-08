function greaterElements(nums1, nums2) {
    const stack =  [];
    const hashMap = new Map();
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
            hashMap.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    while (stack.length > 1) {
        hashMap.set(stack.pop(), -1);
    }

    for (let i = 0; i < nums1.length; i++) {
        result[i] = hashMap.get(nums1[i]);
    }
  
    for(let [key, value] of hashMap.entries()){
       console.log(key, value);
    }

    return result;
}

console.log(greaterElements([4,1,2], [1,3,4,2]));


// CODE HAS A BUG FIX IT!!!!!!!!!!!