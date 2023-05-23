class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    let newNode = new Node(val);
    // if tree is empty, assign root to newNode;
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    while(current){

      if(current.val > val){
        if(current.left ===null){
           current.left = newNode;
           return this;
        } else{
           current = current.left;
        }
      } else{
        if(current.right ===null){
          current.right = newNode;
          return this;
        } else{
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root){
    // if tree is empty, assign root to newNode;
    if(this.root===null) {
      this.root = new Node(val);
      return this;
    }
    // if val is smaller than current.val then move to left
      //  of assign new node to left if current.left does not exist
    if(current.val> val){
        if(current.left ===null){
          current.left = new Node(val);
          return this;
        } else{
          // otherwise do the same process with next left value
          this.insertRecursively(val, current.left )
        }
      // if val is larger than current.val then move to right
    } else if(current.val <val){
        if(current.right ===null){
          current.right = new Node(val);
          return this;
        } else{
          this.insertRecursively(val, current.right);
        }  
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root ===null){
      return;
    }

    let current = this.root;
    while(current!==null){
        if(current.val ===val){
            return current;
        }else if(val < current.val){
            current = current.left;
        } else if(val > current.val){
            current = current.right;
        }
    }
    return;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    // this cover's case 1: no root, or when current becomes null after going through all tree
    if(current===null) return undefined; 
    if(current.val ===val){
        return current;
    }else if(val < current.val){
        return this.findRecursively(val, current.left)
    } else if(val > current.val){
        return this.findRecursively(val, current.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes'val. */

  dfsPreOrder() {
    let visitedNodes = []
    if(this.root ===null){ return visitedNodes;}

    function traverse(node){
      let current = node;
      visitedNodes.push(current.val)
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = []
    if(this.root ===null){ return visitedNodes;}

    function traverse(node){
      let current = node;
      if(current.left) traverse(current.left);
      visitedNodes.push(current.val)
      if(current.right) traverse(current.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = []
    if(this.root ===null){ return visitedNodes;}

    function traverse(node){
      let current = node;
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);
      visitedNodes.push(current.val)
    }
    traverse(this.root);
    return visitedNodes;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let current;
    let visitedNodes = []

    while(queue.length!==0){  
      current = queue.shift();
      visitedNodes.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }  
    return visitedNodes;  
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}


const second = new Node(2)
const third = new Node(3)
const first = new Node(1, second, third);
const tree = new BinarySearchTree(first);

module.exports = BinarySearchTree;
