/*
Heaps are used in implementing Priority Queues.
Lets understand what a Priority Queue is?
It is a Datastructure where each and every element has a priority.
Elements with higher priority are served before elements with lower priority.

Priority Queue can be implemented as an Array or a Lists

A Naive Version:
Implementing Priority Queue as an Array:
-> Iterate over the entire thing to find the highest priority element.
But this is not a good approach.
This will work for sure, But the thing is if there are thousands of elements,
there will be thousand number of comparisons. which is not good in terms of time complexity.


Priority Queue as Heap:
Class 1:
(Class Structure):
className: PriorityQueue
Properties: value = []

Class 2:
(Class Structure):
className: Node
Properties:
    val
    priority

Pseudocode:
-> Write a Min Binary Heap - lower number means higher priority
-> Each Node has a val and a priority. Use the Priority to build the Heap.
-> Enqueue Method accepts the value and a priority, makes a new node and puts it in the right spot based off its 
priority.
-> Dequque Method removes root element, returns it and rearranges heap using priority.
-> Its basically a Min Binary Heap


BIG O Notation:
O(log n)

RECAP:
-> Binary Heaps are very useful data structures for sorting, implementing and other
datastructures like priority queues.
-> Binary Heaps are either Max BH or Min BH with parents being smaller or larger than their childrens.
-> With just a little bit of Maths we can represents Heaps using Arrays!
*/