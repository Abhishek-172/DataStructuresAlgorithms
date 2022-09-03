// We are Building an Undirected Graph:
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // Method:
    /*
    Adding a Vertex: It should add a Key to the Adjacency list with the name of the Vertex
    and set its value to be an empty array
    */
    addVertex(vertex) {
        // Check if that vertex is already Present or not?
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
        else {
            (this.adjacencyList[vertex2]);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].filter(function (value, index, arr) {
                return value !== v2;
            });
        }
        else {
            this.adjacencyList[v2].filter(function (value, index, arr) {
                return value !== v1;
            });
        }
    }
    // TODO: Remove Vertex, Edge is Remaining
    depthFirstSearchRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        // Recursive Function
        (function DFS(vertex) {
            if (!vertex) return null;
            // Mark the Node as Visited
            visited[vertex] = true;
            // Add the Visited Node to Result Array
            result.push[vertex];
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor);
                }
            });
        }(start));
        return result;
    }
    /*
    Pseudocode DFS (Iterative):
    1. Function should accept a starting node.
    2. Create a stack to help use keep track of vertices (use a list/array)
    3. Create a list to store the end result to be returned at very end.
    4. Create an object to store visited vertices
    5. Add the starting vertex to the stack and mark it visited
    6. While the stack has something in it.
        6.1 Pop the next vertex from the stack.
        6.2 If that vertex has'nt been visited yet:
            6.2.1 Mark it as visited
            6.2.2 Add it to result list
            6.2.3 Push all of its neighbors into the stack.
    7. Return the result array.
    */
    depthFirstSearchIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    // Breadth First Search
    BreadthFirstSearch(start) {
        const queue = [start];
        const result  = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        
        while (queue.length) {
            // Remove the Element from a Queue, FIFO Way
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");