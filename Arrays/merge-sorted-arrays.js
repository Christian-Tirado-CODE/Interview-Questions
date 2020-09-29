function mergeSortedArrays(arrA, arrB){
    var i = 0;
    arrC = [];
    
    while(i < arrA.length && i < arrB.length){
      if(arrA[i] < arrB[i]){
        arrC.push(arrA.shift());
      }
      else {
        arrC.push(arrB.shift());
      }
     
    }
    
    if( i === arrA.length)
      return [...arrC, ...arrB.slice(i)];
    if(i === arrB.length)
      return [...arrC, ...arrA.slice(i)];
  }
  
  console.log(mergeSortedArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]));
  // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]