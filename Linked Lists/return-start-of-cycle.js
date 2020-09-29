/* 
This question is asked by Apple. Given a potentially cyclical linked list 
where each value is unique, return the node at which the cycle starts. If 
the list does not contain a cycle, return null.
*/

class Node{
    constructor(data, next){
      this.data = data;
      this.next = next;
    }
  }
  
  function returnStartOfCycle(head) {
      var slow = head;
      var fast = head;
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
          if (slow == fast) {
              break;
          }
      }
  
      if (fast == null || fast.next == null) {
          return null;
      }
  
      slow = head;
      while (slow != fast) {
          slow = slow.next;
          fast = fast.next;
      }
  
      return slow;
  }
  
  /*
  1->2->3, return null
  1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
  1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
  */
  var n6 = new Node(2, null);
  var n5 = new Node(5, n6);
  var n4 = new Node(4, n5);
  var n3 = new Node(3, n4);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  n6.next = n2;
  var head = n1;
  
  const node = returnStartOfCycle(head);
  console.log(node.data);
   

  // Time Complextity: O(N)
  // Space Complexity: O(1)