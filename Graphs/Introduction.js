/*
Graphs are used in any social network.
Modelling Users
Recommendation Engines, Ex: Netflix Recommends user a movie / advertise etc.
Objectives:
    -> Compare and contrast diff types of Graphs and their usecases in the real world.
    -> Implement a Graph using adjancey list.
    -> Traversing a Graph using Traversal Techniques:
        1. BFS
        2. DFS
What are Graphs?
Graph = nodes + connections
Its kind of free form (No Child No Parent)
Uses of Graphs:
    -> Social Network
    -> Location/Mapping
    -> Routing Algorithms
    -> Visual Hierarchy
    -> File System Optimization
    -> Recommendation Engines
        -> "People also Watched!"
        -> "You might also like ..."
        -> "People you might Know"
        -> "Frequently Bought with"
    It is Everywhere!

Types of Graphs:
Essential Graph Terms:
    -> Vertex - A Node
    -> Edge - A connection Between Nodes

    1. Directed Graph - A graph which have 1 way direction, A direction assigned to edge
        Example: Instagram is a Directed Graph.
        Abhishek follows Ashima
        Ashima follows Abhishek
        Abhishek follows NatGeo, But Natgeo Does'nt follow Abhishek

        Instagram is a Unweighted Directed Graph


    2. Un-Directed Graph - A graph which have all the connections 2 way
        Example: (Default Behaviour) Friends Sending and Accepting a Request in Facebook is an Undirected Graph

        Facebook is a Unweighted Undirected Graph

    3. Weighted Graph - Each and Every Edge have a assigned weight.
    Example :
    Abhishek Wants to Go to Bhopal from Chhindwara
    2 routes
    -> Via Pipariya, it will cost me around 280kms
    -> Via Betul, it will cost me around 250kms
    Assigned Cost/ Weight to a Edge is defined as a Weighted Graph which will be helpful
    to find out the shortest route between two points.

    Unweighted is just opposite of weighted, No weight assigned to the Edge.

Representing a GRAPH: (Storing Them/ Representing Them):
Via Adjacency Matrix and Adjacency List
We will use matrix/List form to store. (Written in paper)

Comparison Between Both :
        Adjency List                        Adjency Matrix
    1. Can take up less space           1. Takes up more space.
    2. Faster to iterate over           2. Slower to iterate
       all edges                           over all edges
    3. Can be slower to find a          3. Faster to lookup specific edge
    specific edge                       

What will we use?

Ans: Adjacency List
Why?
Most of the data in the real world tends to lend itself to sparser (kam faila hua) or larger graphs.

(Very Very Important For Interviews) Graph Traversal:
Traversing a Graph, searching or visiting neighbours from a given node.
Visiting/Updating/Checking each vertex in a graph.

Points to Remember:
-> Every Tree is a Graph
-> Every Graph is not a Tree
-> As there is no root node, so we must get the node where to get started from

Real World Usage:
-> Peer to Peer Networking
-> Web Crawlers
-> Finding "closest" matches/recommendations
-> Shortest Path Problems:
    -> GPS Navigation
    -> Solving Mazes
    -> AI (Shortest Path to Win the Game)

Traversal Techniques:
Here we will be traversing a Graph that is not a Tree
1. DFS (Traversing in Downward Direction)
    -> Recursive Way
    -> Iterative Way
2. BFS

Pseudocode for DFS Recursive Way:
    -> The function should accept a starting node.
    -> Create a list to store the end result, to be returned at the very end
    -> Create an Object to store visited vertices
    -> Create a Helper function which accepts a vertex
        -> The helper function should return early if the vertex is empty
        -> The helper function should place the vertex it accepts into the visited object and
            push that vertex into the result array.
        -> Loop over all the values in the adjacency list for that vertex
        -> If any of those values have not been visited recusively invoke the helper function with that vertex.
    -> Invoke the helper function with the starting vertex.
*/