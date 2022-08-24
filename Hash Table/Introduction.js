/*
Hash Tables: (A Key Value Datastore)
-> Hash tables are used to store key-value pairs.
-> Hash Tables are like arrays But keys are not ordered!
-> Unlike arrays, Hash tables are fast for all of the following operations:
    -> Finding Values
    -> Adding New Values
    -> Removing Values
-> Nearly every programming language has some sort of hash table data structure, because of their speed 
   hash tables are used very commonly.

   HASH TABLE in WILD:
   -> In Javascript 
    -> Objects and Maps are the Hash Table
    Object have some restrictions but they are basically hash tables.

    They are inbuilt in different languagaes.
    But what if they were not there?
    In that case, we need to implement our very own Hash Tables:
    -> To implement a Hash Table we will be using an Array.
    -> In order to lookup values by keys we need a way to convert keys into a valid array indexes.
    -> A function that performs this tasks is called a Hash Function.

    -> Our Hash Table must handle both types of keys strings/ numbers
    -> And also there should not be a collisons.

    -> Even with a large array and a great hash function, collisons are inevitable.
    -> There are many strategies for Handling Collisons:
    We will focus on the Below 2s:    
        -> Separate Chaining, We can call it a Nested Array. Matlb ek index k andar ek aur array.
        -> Linear Probing, With this we search through the entire array to find the next empty slot.
            Unlike with seperate chaining this allows us to store a single key-value at each index.
            Example:
            We hashed pink and we got index 4,
            similarly for red we got index 4.
            Now using Linear Probing we will check for the next index i.e. 5 whether is it empty or not.
            If not then move forward to 6th index, if yes add it there.

Big(O) of Hash Function - O(1) in Insertion Deletion and Accessing
Searching a Key - O(1)
Searching a Value - O(n)
*/