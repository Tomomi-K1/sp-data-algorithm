class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    
    vertex.adjacent.forEach(node =>this.removeEdge(vertex, node));
    this.nodes.delete(vertex);
    
    //==springboard solution====
    // for(let node of this.nodes){
    //   if(node.adjacent.has(vertex)){
    //     node.adjacent.delete(vertex)
    //   }
    // }
    // this.node.delete(vertex);

  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack =[start];
    let seen = new Set([start]);
    let visited = []

    while(toVisitStack.length){
      let current = toVisitStack.pop();
      visited.push(current.value);
      for(let person of current.adjacent){
        if(!seen.has(person)){
          seen.add(person);
          toVisitStack.push(person);
        }
      }
      
    }
    return visited;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue =[start];
    let seen = new Set([start]);
    let visited = []

    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      visited.push(current.value);
      for(let person of current.adjacent){
        if(!seen.has(person)){
          seen.add(person);
          toVisitQueue.push(person);
        }
      }
      
    }
    return visited;

  }
}

    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

module.exports = {Graph, Node}