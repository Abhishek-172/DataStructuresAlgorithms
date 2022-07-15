class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // Adds the new node
    push(val) {
        let newNode = new Node(val);
        // Edge Case
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;   
        // Return the Newly Created SinglyLinkedList
        return this;
    }
    // Removes the last node from SinglyLinkedList
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // Return the Deleted Node
        return current;
    }
    // Removes the First Node From the Linked list
    shift() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        // Return the Deleted Node Value
        return current;
    }
    // Add New Node at the beginning
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;   
        }
        this.length++;
        return this;
    }
    // Get
    get(index) {
        if(index < 0 || index >= this.length) {
            return 'Please provide correct index Value';
        } else {
            let count = 0;
            let current = this.head;
            while(count!==index) {
                current = current.next;
                count++;
            }
            return current;
        }
    }
    // Set 
    set(index, newVal) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false; 
      }
    // Insert
    insert(index, newVal) {
        if(index < 0 || index > this.length) {
            return false;
        }
        else if(index === this.length) {
            return this.push(newVal);            
        }
        else if(index === 0) {
            return this.unshift(newVal);
        }
        else {
            let newNode = new Node(newVal);
            let foundNode = this.get(index-1);
            let previousNode = foundNode.next;
            foundNode.next = newNode;
            newNode.next = previousNode;
            this.length++;
            return true;
        }
    }
}

let list = new SinglyLinkedList();
list.push('Amazon');
list.push('Apple');
list.push('Atlassian');
list.push('Google');
list.push('GoldmanSachs');