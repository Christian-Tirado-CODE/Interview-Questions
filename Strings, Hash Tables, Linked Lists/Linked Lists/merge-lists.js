/*
This question is asked by Apple. Given two sorted linked lists, 
merge them together in ascending order and return a reference to the merged list
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
  
  