function addBinaryStrings(str1, str2){
    const addNumbers = parseInt(str1, 2) + parseInt(str2, 2);
    
  
  return addNumbers.toString(2);
}



//HELPFUL LINKS: https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal

//Time Complexity: O(1) 
// Space Complexity: O(1)
console.log(addBinaryStrings("100", "1"));
console.log(addBinaryStrings("11", "1"));
console.log(addBinaryStrings("1", "0"));