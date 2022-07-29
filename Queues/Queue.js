class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Insertion at the end
    enqueue(val) {
        // Create a new Node
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.length;
    }
    //Removal from the top
    dequeue() {
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            this.tail = null;
        }
        this.head = this.head.next;
        this.length--;
        return this.length;
    }
}