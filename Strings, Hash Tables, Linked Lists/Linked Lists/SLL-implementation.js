class Node {
    constructor(data, next = null){
       this.data = data;
       this.next = next;
    }
}


class LinkedList {
  
  constructor(){
     this.head = null;
     this.size = 0;
  }
  
  insert(element){  //INSERT ELEMENT
    
    let node = new Node(element);
    
    if(this.head === null){
        this.head = node;
   
    }
    else {
         let currentNode = this.head;
        
        while(currentNode.next !== null){
          currentNode = currentNode.next;
        }
        
        currentNode.next = node;
        
    }
    this.size++;
  }
  
  
  remove(element){    // REMOVE ELEMENT
    let currentNode = head;
    let previousNode;
    
    if(head.data === element)
      head = currentNode.next;
    else {
      while(curentNode.element !== element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode = currentNode.next;
    }
    this.size--;
  }
  
  // INSERT AT
  // REMOVE AT
  //INDEX OF
  //ELEMENT AT
  // SIZE
  
  
  
  printList(){            // PRINT LIST
    let currentNode = this.head;
    let list = '';
    while(currentNode !== null){
      
        list += ` -> ${currentNode.data}`;
        currentNode = currentNode.next;
    }
     console.log(list);
  }
  
}


let ll = new LinkedList();

ll.insert('1');
ll.insert('2');
ll.insert('3');
ll.printList();



