/*
This question is asked by Apple. Given two sorted linked lists, 
merge them together in ascending order and return a reference to the merged list
*/

/*
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
    
    add(element){
      let node = new Node(element);
      
      if(this.head === null){
        this.head = node;
      }
        
      else {
        let currentNode =this.head;
        while(currentNode.next !== null){ 
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      this.size++;
    }
    
    getListHead(){
       return this.head;
    }
    
    
    
    
     printList(){
       let currentNode = this.head;
        let list = '';
       while(currentNode !== null){
          list += `-> ${currentNode.data}`;
         currentNode = currentNode.next;
       }
      console.log(list);
    }
  }
  
  function mergeLists(list1, list2){
       let currentNode = list1.getListHead();
       
       let mergedList = new LinkedList();
       let numbers = [];
      
         while(currentNode !== null){
             numbers.push(currentNode.data);
             currentNode = currentNode.next;
         }
          currentNode = list2.getListHead();
    
          while(currentNode !== null){
             numbers.push(currentNode.data);
             currentNode = currentNode.next;
         }
           numbers.sort();
           numbers.forEach(number => mergedList.add(number));
      mergedList.printList();
    return mergedList.getListHead();
    }
  
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  */
  /*
  list1.add(1);
  list1.add(3);
  list1.add(5);
  
  
  list2.add(2);
  list2.add(4);
  list2.add(6);
  
  list1.printList();
  list2.printList();
  
  mergeLists(list1, list2);
  
  */
  
  /*
  list1.add(4);
  list1.add(4);
  list1.add(7);
  
  
  list2.add(1);
  list2.add(5);
  list2.add(6);
  
  mergeLists(list1, list2);
  */
  
  /*
  list1.add(1);
  list1.add(2);
  list1.add(3);
  
  
  list2.add(4);
  list2.add(5);
  list2.add(6);
  
  mergeLists(list1, list2);
  */
  
 class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

function mergeLists(L1, L2){
    var L3 = new Node(null, null);
    var current = L3;
  
    while(L1 !== null && L2 !== null){
         if(L1.data <= L2.data){
             current.next = L1;
              L1 = L1.next;
         }
         else {
             current.next = L2;
              L2 = L2.next;
         }
        current = current.next;
    }
  
    if(L1 === null) current.next = L2;
    if(L2 === null) current.next = L1;
    
    return L3.next;
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

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 


const mergedList = mergeLists(L1,L2);

printList(mergedList);

//SOURCE: CODERBYTE