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
  
  
  