/*function reverseString(str){
    const arr = str.split('');
    let reversedStr = '';
    
    for(let i=arr.length-1; i >= 0; i--){
        reversedStr += arr[i];
    }
  
  return reversedStr;
}*/
//Complexity: O(N) where n is the size of the string.

function reverseString(str){
  return str.split('').reverse().join('');
}
console.log(reverseString('cat'));
console.log(reverseString('The Daily Byte'));
console.log(reverseString('civic'));