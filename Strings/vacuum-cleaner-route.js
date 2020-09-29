
/*
This question is asked by Amazon. Given a string representing the sequence of moves 
a robot vacuum makes, return whether or not it will return to its original position. 
The string will only contain L, R, U, and D characters, representing left, right, up, 
and down respectively.
*/

function isSamePosition(str){
    let left = 0, right = 0, up = 0, down = 0;
    
    for(let i=0; i < str.length; i++){
        switch(str[i]){
          case "L":
                left++;
                right--;
            break;
          case "R":
                right++;
                left--;
            break;
          case "U":
                up++;
                down--;
            break;
          case "D":
                down++;
                up--;
            break;
          default:
              break;
        }
     }
  
      return (left === 0 && right === 0 && down === 0 && up === 0)
  }

  /*
  Time Complexity: O(N) where N is the numbers of characters in the string
  Space Complexity: O(1) or Constant
  
  */
  console.log(isSamePosition("RL"));
  console.log(isSamePosition("URURD"));
  console.log(isSamePosition("RUULLDRD"));
  
  
  