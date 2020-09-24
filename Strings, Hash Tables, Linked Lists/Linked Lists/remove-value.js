/*
This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and 
return the resulting list.
*/



class Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
  }
  
  function removeValue(head, value){
      let dummy = new Node(-1, null);
      dummy.next = head;
      let current = dummy;
      let previous = dummy;
    
     while(current !== null){
        
         if(current.data === value){
            previous.next = current.next;
            current = previous;
           
         }
         previous = current;
         current = current.next;
     }
    
    return dummy.next;
  }
  
  function printList(L){            // PRINT LIST
      let currentNode = L;
      let list = '';
      while(currentNode !== null){
        
          list += `${currentNode.data} ->`;
          currentNode = currentNode.next;
      }
       list += 'null';
       console.log(list);
    }
  
  /*
  1->2->3->null, value = 3, return 1->2->null
  8->1->1->4->12->null, value = 1, return 8->4->12->null
  7->12->2->9->null, value = 7, return 12->2->9->null
  */
  /*
  const n5 = new Node(12, null);
  const n4 = new Node(4, n5);
  const n3 = new Node(1, n4);
  const n2 = new Node(1, n3);
  const n1 = new Node(8, n2);
  const list = n1;
  */
  
  const n4 = new Node(9, null);
  const n3 = new Node(2, n4);
  const n2 = new Node(12, n3);
  const n1 = new Node(7, n2);
  const list = n1;
  
  
  const listModified = removeValue(list, 7);
  printList(listModified);
  
  /* 
  Time Complexity: O(N) where N is the amount of nodes in the list.
  Space Complexity: O(1)
  */
  