/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (!edges.length) return true;
  
  const vertices = {};
  let isFound = false;
  
  edges.forEach(([from, to]) => {
    if (!vertices[from]) {
      vertices[from] = new Vertex(from);
    }
    
    if (!vertices[to]) {
      vertices[to] = new Vertex(to);
    }
    
    vertices[from].addEdge(vertices[to]);
    vertices[to].addEdge(vertices[from]);
  });
  
  
  const findVertex = (sourceVertex, destination) => {
    if (sourceVertex.isChecked || isFound) {
      return false;
    }
    
    if (sourceVertex.value === destination) {
      isFound = true;
      return true;
    }
    
    sourceVertex.isChecked = true;
    return sourceVertex.edge.some((vertex) => findVertex(vertex, destination));
  }
  
  return findVertex(vertices[source], destination);
};

class Vertex {
  constructor(value) {
    this.value = value;
    this.isChecked = false;
    this.edge = [];
  }
  
  addEdge(vertex) {
    this.edge.push(vertex);
  }
}