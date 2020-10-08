/*
Trees
Trees are data structures that store a hierarchical organized of a group of nodes. 
The nodes in each tree may differ depending on what kind of data the tree stores (i.e. integers, strings, etc). 
Trees exist in many different forms and the way in which these nodes are stored, organized, and updated, 
determines the type of tree at hand. When dealing with trees there are a few terms to be aware of:
 child - the node directly below another node, parent - the node directly above another node, and 
 leaf - a node that has no children. While there are many kinds of trees, the most common to encounter 
 during interviews are binary trees and binary search trees. Both these kinds of trees are simply trees 
 that guarantee certain invariants. Binary trees are trees in which each node may contain at most two children, 
 typically referred to as the left and right child. Binary search trees, on the other hand, are a specific type 
 of binary tree, and therefore add an additional invariant. Binary search trees also guarantee that for every 
 node in the tree, the entire left subtree’s values are at most the current node’s value - 1 and the entire 
 right subtree’s values are at least the current node’s value or greater (note that nodes that contain the 
    same value as the node in question may fall either on the left or right subtree as there is no strict 
    convention).

Ok…so what?
You might be wondering why trees matter and that’s a great question! Why should I store my data in a tree 
as opposed to another data structure like a linked list? The answer is, depending on the problem at hand, 
trees might offer faster operations for adding, updating, and deleting your data. For example, imagine 
that you used both a linked list and a binary search tree to store maintain a sorted list of numbers. 
Inserting a new item into your linked list would take O(N) time, where N is the number of nodes in your 
linked list. This results from having to do a linear scan of the entire list to find out where your new 
value should be placed (in the worst case, remember Big-O notation only cares about the worst case). 
Similarly, if you tried to find if a specific value exists in your list, this would also take O(N) time. 
What about removing a specific element? Yep, you guessed it, O(N) time. What about a binary search tree 
that was asked to do the same for our list of numbers? A binary search tree would guarantee that searching 
for an element, adding an element, updating an element, and removing an element all occur in O(logN) time 
where N is the height of your tree (assuming your tree is properly balanced). It’s clear that in our example 
here, the binary tree is the better candidate for storing your data. Remember, learning about these 
data structures is not necessarily enough; ideally, you will understand their advantages and disadvantages 
over one another which will allow you to choose the right one for the problem at hand. Like a carpenter you 
have many tools (all your data structures & algorithms); however, you must be able to identify when to use a
 hand saw vs. a hammer.

What to Know for Interviews
When dealing with trees (any kind) it’s important to know how to traverse your tree. 
Many tree problems in interviews often deal with gathering or finding data from the tree
 which requires traversing it. Trees are often traversed using a few different techniques, 
 most of which involve recursion. The most common tree traversals are preorder traversal 
 (the current node is processed before its subtree is processed), inorder traversal 
 (the current node is processed after its left subtree is processed and before its right subtree is processed), 
 and postorder traversal (the current node is processed after both its left and right subtrees 
    have been processed). A good piece of information to know for interviews is that performing 
    an inorder traversal of a binary search tree will give you the values of the tree in ascending order 
    (mind blown). As you might guess, the runtime of any of these traversals is O(N) where N is the total 
    number of nodes in your tree. Below is an example of an inorder traversal of a tree where we simply
     print the values of each node.
*/