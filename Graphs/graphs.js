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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");