class Node {
    constructor(value) {
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
        let newNode = new Node(10);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (value === current.value) {
                    return undefined;
                }
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = value;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = value;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }    
            }
        }
    }
    found(value) {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value > current.value) {
                current = current.right;
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                found = true;
            }
        }
        if (!found) return 'Not Found';
        return current;
    }
}

let tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
