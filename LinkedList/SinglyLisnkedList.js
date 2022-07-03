class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
 
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.length = this.length+1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length = this.length+1;
        }
        return this;
    }
    pop() {
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // Edge Case
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push('Abhishek Pandey');
list.push('Divya Pandey');
list.push('Padma Pandey');
list.push('Ravi Uday Pandey');
console.log('I am the List:::', list);