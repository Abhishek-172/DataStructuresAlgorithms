class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let elementIndex = this.values.length - 1;
        const element = this.values[elementIndex];
        while (elementIndex > 0) {
            // Find the Parent Node of the element
            let parentNodeIndex = Math.floor((elementIndex - 1) / 2);
            let parentNode = this.values[parentNodeIndex];
            // Check if element is less than or equal to Parent Node
            // If Yes, Break
            if (element <= parentNode) break;
            // If No, Swap the element with its Parent Node
            this.values[parentNodeIndex] = element;
            this.values[elementIndex] = parentNode;
            elementIndex = parentNodeIndex;
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        // If Array is having length greater than 0
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let index = 0
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildindex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildindex < length) {
                rightChild = this.values[rightChildindex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > element)) {
                    swap = rightChildindex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let heap = new MaxBinaryHeap();