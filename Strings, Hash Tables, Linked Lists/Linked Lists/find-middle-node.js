class Node {
    constructor(data, next){
      this.data = data;
      this.next = next;
    }
  }
  
  function returnMiddleNode(head){
    var current = head;
    var size = 0;
    var middle;
    if(head.next === null) return head.data;
    
    while(current !== null){
        size++;
        current = current.next;
    }
    
    current = head;
    middle = size % 2 === 0 ? Math.ceil(size / 2) + 1 : Math.ceil(size / 2);
    
    while(middle > 1){
      middle--;
      current = current.next; 
    }
    return current.data;
  }
  
  
  /*
  1->2->3->null, return 2
  1->2->3->4->null, return 3
  1->null, return 1
  */
  
  
  var n4 = new Node(4, null);
  var n3 = new Node(3, n4);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  var LL = n1;
  
  
  /*
  var n3 = new Node(3, null);
  var n2 = new Node(2, n3);
  var n1 = new Node(1, n2);
  var LL = n1;
  */
  /*
  var n1 = new Node(1, null);
  var LL = n1;
  */
  console.log(returnMiddleNode(LL));
  