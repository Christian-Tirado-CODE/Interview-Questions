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
  */
  
  var n2 = new Node(1, null);
  var n1 = new Node(1, n2);
  var LL = n1;
  
  console.log(containsCycle(LL));

  //Time Complexity: O(N)
  // Space Complexity: O(1)