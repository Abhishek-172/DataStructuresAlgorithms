/*
Objective:
-> Define what a tree is
-> Compare and contrast tree and list
-> Explain the difference between 
    -> Trees
    -> Binary Trees
    -> Binary Search Trees
-> Implement operations on Binary Search Trees

What is a Tree?
-> A datastructure that consists of nodes in a parent/child relationship.
We end up with a Branching Structure that we call as a Trees
in a top to bottom fashion.

-> Compare and contrast tree and list
    -> Lists (Singly / Doubly LL) are linear (Only one Path, can be traversed forward or backward)
    -> Trees are non-linear.

-> Tree have one entry point i.e. Only one ROOT

Tree Terminology:
-> Root -  The top node in tree
-> Child - A node directly connected to another node when moving away from root
-> Parent - The converse notion of child.
-> Siblings - A group of nodes with the same parent
-> Leaf - A node with no children
-> Edge - The connection between one node to another

Uses of Trees:
Lots of different applications:
1. HTML DOM (Document Object Model)
2. Network Routing, its a Delievery Schemes
    -> BroadCast
    -> Mutlicast
    -> Anycast
3. Abstract Synatx Tree (It will hold the syntax of a programming language)
4. AI uses Tree (Ex: A smart Tic Tac Toe Game, which knows all the possibilities)
5. Folder Directory in Operating Systems

Different Types of Trees:
1. Trees
2. B Trees
3. Binary Search Trees


Laws with BST:
1. Root Node must have max 2 nodes not more than that
2. Child Node at left must be less than parent node and also the Child Node at right must be greater than
 parent.
 


Big O of Binary Search Trees:
O(log n) for both Insertion and Searching
*/