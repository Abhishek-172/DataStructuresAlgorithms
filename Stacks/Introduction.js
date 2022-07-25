/*
Stack follows: LIFO (Last In First Out)

Where the stacks are used:
1. Managing Function Invocations
2. Undo/ Redo
3. Routing - (The History Object) It is treated like a STACK
4. There are multiple ways of implementing Stacks - we are using arrays

With arrays if we try to create a STACK,
There are two ways 
1. Using Push and Pop (adding and removing at the last)
2. Unshift and Shift  (adding and removing at the beginning)

But only one method is good among both.

Number 1, bcz operations (Addition and Removal) is happening at the end of the array
So here we dont have to do the re-indexing of the elements

But in Shift and Unshift way we need to do the reindexing of all the next elements
Which is going to be very expensive in terms of time complexity.
*/