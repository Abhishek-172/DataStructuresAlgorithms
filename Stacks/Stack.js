class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
        }
        return ++this.length;
    }
    pop() {
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            this.tail = null;
        } 
        let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--;
        return current;
    }
}