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
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
    
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
            
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if (index === this.length-1) return !!this.pop();
        
        let removedNode = this.get(index);
        
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        
        this.length--;
        return removedNode;
    }
    reverse() {
        let temp = null;
        let current = this.head;  
        /*
         * swap next and prev for all nodes of doubly linked list
         */
        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
