/*
    How the adjacencyList will look like?
    -> 
    {
        "Vertex": [
                    {Node: "Vertex", Weight: "Given Weight"},
                    {Node: "Vertex", Weight: "Given Weight"}
                  ],
        "Vertex": [
                    {Node: "Vertex", Weight: "Given Weight"},
                    {Node: "Vertex", Weight: "Given Weight"}
                  ]
    }
*/

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
}