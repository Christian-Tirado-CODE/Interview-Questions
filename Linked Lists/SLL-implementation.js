/*
Linked Lists
Linked lists are a linear collection in which the elements are not necessarily stored
in contiguous memory locations. As a result of this, to maintain their relative order,
 each element in the list has a reference to the next element in the list.
 Each element in a list is typically referred to as a node and contains a specific type
 of object. While Java and other languages offer a linked list library, it’s very common
 during interviews to use custom node classes to store data as you please.

What to Know for Interviews
Linked lists are a common topic during technical interviews questions,
most of which involve traversing the list and returning a specific element,
 or modifying the list itself. Because of this, knowing how to traverse a linked list
  is paramount to being able to solve these questions. When traversing a linked list,
   the only reference you have to start is the head (or beginning) of the list.
   From the head you must continue traversing while you have not encountered a
   null node (i.e. the end of the list).

*/

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



