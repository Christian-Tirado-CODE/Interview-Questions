/*
This question is asked by Google. Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
Note: all values in the binary search tree will be unique.
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

 
}

var bst = new BST();

for (var num of [7, 5, 9, 8, 10]) {
  bst.insert(num);
}

 
function  searchBST(root, val) {
    if(root === null) {
        return null;
    } else if(root.data == val) {
        return root;
    } else if(val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

const node = searchBST(bst.root, 9);
console.log(node);

  
  // Does not work when value is not in tree.
  