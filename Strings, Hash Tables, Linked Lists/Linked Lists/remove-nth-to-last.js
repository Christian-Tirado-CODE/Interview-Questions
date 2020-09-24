
/*
class Node {
    constructor(data, next){
      this.data = data;
      this.next = next;
    }
  }
  
  function removeNthToLastNode(LL, n){
      var head = LL;
      var current = head;
      var previous = current;
      var size = 0;
     while(current !== null){
         size++;
         current = current.next;
     }
    
     current = head;
     previous = current;
     size -= n;
    
     if(size === 0) return head.next;
    
    while(size !== 0){
      previous = current;
      current = current.next;
      size--;
      
    }
    
    previous.next = current.next;
   return head;
    
  }
  
  function printList(L){            // PRINT LIST
      let currentNode = L;
      let list = '';
      while(currentNode !== null){
        
          list += ` -> ${currentNode.data}`;
          currentNode = currentNode.next;
      }
       console.log(list);
    }
  
  var n3 = new Node(3,null);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  var LL = n1;
  
  //printList(removeNthNode(LL, 1));
  //printList(removeNthNode(LL, 2));
  printList(removeNthNode(LL, 3));

  */

 class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

function removeNthToLastNode( head,  n) {
  let dummy = new Node(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  while(n > 0) {
      fast = fast.next;
      n--;
  }

  while(fast.next != null) {
      fast = fast.next;
      slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

var n3 = new Node(3,null);
var n2 = new Node(2, n3);
var n1 = new Node(1, n2);
var LL = n1;

function printList(L){            // PRINT LIST
    let currentNode = L;
    let list = '';
    while(currentNode !== null){
      
        list += ` -> ${currentNode.data}`;
        currentNode = currentNode.next;
    }
     console.log(list);
  }

const list = removeNthToLastNode(LL, 1);
console.log(printList(list));

/*
Runtime: O(N) where N is the number of nodes in our list.
Space complexity: O(1) or constant.
SOURCE: The Daily Byte
*/
  
  