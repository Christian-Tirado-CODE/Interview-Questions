
/*
Given a binary search tree that contains unique values and two nodes within the tree, a, and b,
 return their lowest common ancestor. Note: the lowest common ancestor of two nodes is the deepest node
  within the tree such that both nodes are descendants of it.
*/



class Node {
    constructor(data, left, right){
       this.data = data;
       this.left = left;
       this.right = right;
    }
  }
   function lowestCommonAncestor(root, a, b){
     let biggerElm;
     if(root === null)
       return;
      if(a > b)
        biggerElm = a;
       else 
         biggerElm = b;
     
     return searchBST(root, biggerElm);
   }
  
  function searchBST(root, value){
    let current = root;
    let ancestor;
    
    if(root.data === value)
      return  root;
    
    while(current.data !== value){
       if(value > current.data){
           ancestor = current;
           current = current.right;
       }
       else {
           ancestor = current;
           current = current.left;
       }
    }
    return ancestor;
  }
  
  function preOrder(root) {
      var curr = root;
  
      if (curr) {
        console.log(curr.data);
        this.preOrder(curr.left);
        this.preOrder(curr.right);
      }
    }
  
  /*
  let n8 = new Node(8, null, null);
  let n3 = new Node(3,null, null);
  let n9 = new Node(9, null, null);
  let n2 = new Node(2, null, null);
  let n6 = new Node(6, null, null);
  
  n8.left = n3;
  n8.right = n9;
  n3.left = n2;
  n3.right = n6;
  let root = n8;
  
  const lca = lowestCommonAncestor(root, 2, 6);
  console.log(lca.data);
  
  */
  
  /*
  let n7 = new Node(7, null, null);
  let n2 = new Node(2,null, null);
  let n9 = new Node(9, null, null);
  let n1 = new Node(1, null, null);
  let n5 = new Node(5, null, null);
  
  n7.left = n2;
  n7.right = n9;
  n2.left = n1;
  n2.right = n5;
  let root = n7;
  const lca = lowestCommonAncestor(root, 1, 9);
  console.log(lca.data);
  
  */
  
  //preOrder(root);
  
  let n8 = new Node(8, null, null);
  let n6 = new Node(6,null, null);
  let n9 = new Node(9, null, null);
  let root = n8;
  
  n8.left = n6;
  n8.right = n9;
  
  const lca = lowestCommonAncestor(root, 6, 8);
  console.log(lca.data);
  
  
  