class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // Create a New Node
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let newTail = this.tail;
        if (this.length === 0) {
            return undefined;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = newTail.prev;
            this.tail.next = null;
            newTail.prev = null;
        }
        this.length--;
        return newTail.val;
    }
    shift() {
        // Case 1: Check if Head is Null or not, if null return undefined
        // Case 2: Check if Length is 1, update the head and tail to null
        // Case 3: Create a pointer, give it head's next, and update the Head to that
        let oldNode = this.head;
        if (!this.head) {
            return undefined;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldNode.next;
            this.head.prev = null;
            oldNode.next = null;
        }
        this.length--;
        return current;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
