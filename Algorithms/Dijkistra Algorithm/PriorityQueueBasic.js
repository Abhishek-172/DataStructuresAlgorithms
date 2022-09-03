class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }
    dequeue() {
        // Take out the first index from the Values Array
        return this.values.shift();
    } 
    sort() {
        this.values.sort((a, b) => {
            a.priority - b.priority
        });
    }
}