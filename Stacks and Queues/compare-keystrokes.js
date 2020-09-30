function compareKeyStrokes(s, t){
    var stack_1 = [];
    var stack_2 = [];
    
  
   for(c of s){
      if(c === "#"){
         stack_1.pop();
      }else {
        stack_1.push(c);
      }
   }
  
  for(c of t){
    if(c === "#"){
         stack_2.pop();
      }else {
        stack_2.push(c);
      }
  }
  console.log(stack_1, stack_2);
  return stack_1.join('') === stack_2.join('');
}


/*
s = "ABC#", t = "CD##AB", return true
s = "como#pur#ter", t = "computer", return true
s = "cof#dim#ng", t = "code", return false
*/

console.log(compareKeyStrokes("ABC#", "CD##AB"));
console.log(compareKeyStrokes("como#pur#ter", "computer"));
console.log(compareKeyStrokes("cof#dim#ng", "code"));
//Time Complexity: O(N)
// Space Complexity: O(N)



