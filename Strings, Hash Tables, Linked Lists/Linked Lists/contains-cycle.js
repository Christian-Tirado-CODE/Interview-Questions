/*
This question is asked by Microsoft. Given a linked list, containing unique numbers, return whether or not it has a cycle.
Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)


class Node {
    constructor(data, next){
      this.data = data;
      this.next = next;
    }
  }
  
  function containsCycle(head){
    var dummy  = head;
    var firstNode = head;
    
    while(dummy.next !== null){
       dummy = dummy.next;
    }
    return firstNode.data === dummy.data;
  }
  */
  /*
  1->2->3->1 -> true (3 points back to 1)
  1->2->3 -> false
  1->1 true (1 points to itself)
  */
  /*
  var n4 = new Node(1, null);
  var n3 = new Node(3, n4);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  var LL = n1;
  */
  /*
  var n3 = new Node(3, null);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  var LL = n1;
  
  var n2 = new Node(1, null);
  var n1 = new Node(1, n2);
  var LL = n1;
  
  console.log(containsCycle(LL));
  */

  //Time Complexity: O(N)
  // Space Complexity: O(1)
  
  class Node {
    constructor(data, next){
      this.data = data;
      this.next = next;
    }
  }
  
  function containsCycle(head) {
       let slow = head;
       let fast = head;
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
        console.log(slow.data + ' ' + fast.data);
          if (slow == fast) {
              
              return true;
          }
      }
  
      return false;
  }
  
  var n4 = new Node(1, null);
  var n3 = new Node(3, n4);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  n4.next = n1;
  var head = n1;
  
  console.log(containsCycle(head));
  /*
  1->2->3->1 -> true (3 points back to 1)
  1->2->3 -> false
  1->1 true (1 points to itself)
  */
  
  // Time Complextity: O(N)
  // Space Complexity: O(1)