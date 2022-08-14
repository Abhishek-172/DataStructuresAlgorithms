/*
Heap is a one kind of Tree in general.
Whatever is applied to BST same goes for Heaps.
There are different kind of heaps
But we will be focusing only on Binary Heap.
Binary Heap are of 2 types:
    1. Max Binary Heap
    2. Min Binary Heap

What is a Binary Heap?
Very Similar to a Binary Search Trees, but with different rules!

Max Binary Heap:
Here the parent nodes are always greater than the child nodes.

How does a Max Binary Heap look like?
Value of Parent is always Greater than its childrens
                                100
                        19              36
                    17      3       25      1
                2       7

Min Binary Heap:
Here the parent nodes are always smaller than both the child nodes.

How does Min Binary Heap look like?
Value of Parent is always less than its childrens
                                1
                        2               3
                    17      19      36      7
                25      100

Why do we need to know this?
Binary Heaps are used to implement Priority Queues which are commonly used data structures.
They are also used quite a bit with graph traversal algorithms.

Storing a Heap:
-> For storing a Heap, we will add the same in an Array 
Suppose if we have a Parent Node, and someone asks to provide its child node:
Formula: For Finding the LeftNode : 2N + 1.
         For Finding the RightNode: 2N + 2.

Suppose if we have a Child Node, and someone asks to provide its parent Node:
Formula: (n-1)/2, if we gets the decimal value just floor it.
*/