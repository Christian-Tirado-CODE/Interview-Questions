/*
Given a binary search tree, rearrange the tree such that it forms 
a linked list where all its values are in ascending order.
*/


class Node {
    constructor(data) {
      this.data = data;
      this.left = undefined;
      this.right = undefined;
    }
  
  }
  
  class BST {
    constructor() {
      this.root = undefined;
    }
  
    // insert a Node
    insert(data) {
      var n = new Node(data);
      if (!this.root) {
        this.root = n;
        return
      }
      
      var curr = this.root;
      
      while (data !== curr.data) {
        if (data < curr.data) {
          if (!curr.left) {
            curr.left = n;
            break;
          }
          curr = curr.left;
        } else if (data > curr.data) {
          if (!curr.right) {
            curr.right = n;
            break;
          }
          curr = curr.right;
        }
      }
    }
  
    // In-order traversal print
    inOrder(root) {
      var curr = root;
  
      if (curr) {
        this.inOrder(curr.left);
        console.log(curr.data);
        this.inOrder(curr.right);
      }
    }
  
    // Post-order traversal print
    postOrder(root) {
      var curr = root;
  
      if (curr) {
        this.inOrder(curr.left);
        this.inOrder(curr.right);
        console.log(curr.data);
      }
    }
  
    // Pre-order traversal print
    preOrder(root) {
      var curr = root;
      if (curr) {
        console.log(curr.data);
        this.preOrder(curr.left);
        this.preOrder(curr.right);
      }
    }
  
    convertBSTToSortedLinkedList(root) {
    const values =  [];
    this.inorder(root, values);
    let result = new Node();
    let current = result;
    for (let value of values) {
        current.right = new Node(value);
        current = current.right;
    }

    return result.right;
}

 inorder(root, values) {
    if (root == null) {
        return;
    }

    this.inorder(root.left, values);
    values.push(root.val);
    this.inorder(root.right, values);
}
    
    
  }
  
  var bst = new BST();
  
  for (var num of [7, 5, 9, 8, 10]) {
    bst.insert(num);
  }

   
  
// CODE DOES NOT WORK :(
 bst.convertBSTToSortedLinkedList(bst.root);
bst.preOrder(bst.root);

//Time Complexity: Runtime: O(N) where N is the number of nodes in our tree.
// Space complexity: O(N) where N is the number of nodes in our tree.


