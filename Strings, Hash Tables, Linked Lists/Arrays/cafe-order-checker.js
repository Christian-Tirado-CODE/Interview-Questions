function isFirstComeFirstServed(takeOut,dinerIn, servedOrders){
  
    for(var i=0; i < servedOrders.length; i++){
       if(servedOrders[i] === takeOut[0])
         takeOut.shift();
       else if(servedOrders[i] === dinerIn[0])
         dinerIn.shift();
       else 
         return false;
    }
  
  return true;
}

/*
  Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
  
 Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
*/

/*
const takeOut = [1, 3, 5];
const dinerIn = [2, 4, 6];
const servedOrders = [1, 2, 4, 6, 5, 3];
*/

const takeOut = [17, 8, 24];
const dinerIn = [12, 19, 2];
const servedOrders = [17, 8, 12, 19, 24, 2];



console.log(isFirstComeFirstServed(takeOut, dinerIn, servedOrders));
