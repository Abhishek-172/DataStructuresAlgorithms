class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        // Create a Arrays, 1. Data 2. Queue
        let node = this.root;
        let data = [] , queue = [];
        // Add Root Node in Queue Array
        queue.push(node);
        // Loop As long as there is something in the queue
        while (queue.length) {
            // Take out the first element from the Queue
            node = queue.shift();
            // Now add this node to the data Array
            data.push(node);
            // Now check if the node have left or right, if yes, add it to the Queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }
    DFSPreOrder() {
        // Recursive Way
        let data = [];
        function traversal(node) {
            data.push(node.value);
            if (node.left) { traversal(node.left); }
            if (node.right) { traversal(node.right);}
        }
        traversal(this.root);
        return data;
    }
    DSFPostOrder() {
        // Recursive Way
        let data = [];
        function traversal(node) {
            if (node.left) { traversal(node.left); }
            if (node.right) { traversal(node.right); }
            data.push(node);
        }
        traversal(this.root);
    }
    DFSInorder() {
        let data = [];
        function traversal(node) {
            if (node.left) { traversal(node.left); }
            data.push(node);
            if (node.right) { traversal(node.right); }
        }   
        traversal(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInorder();