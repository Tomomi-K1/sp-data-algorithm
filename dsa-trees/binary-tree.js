/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(current=this.root) {
    if(!current) return 0;

    if(current.left===null && current.right===null) return 1;

    let leftDepth = current.left !==null? this.minDepth(current.left): 0;
    let rightDepth = current.right !==null? this.minDepth(current.right) : 0;

    return 1 + Math.min(leftDepth, rightDepth);
 
    // function minDepthhelper(node){
    //   if(node.left ===null && node.right ===null) return 1;
    //   if(node.left===null) return minDepthhelper(node.right)+1;
    //   if(node.right===null) return minDepthhelper(node.left)+1;
    //   return(
    //     Math.min(minDepthhelper(node.left), minDepthhelper(node.right))+1
    //   )
    // }

    
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(current=this.root) {
    if(!current) return 0;

    if(current.left ===null && current.right ===null) return 1;

    let leftDepth = current.left !==null? this.maxDepth(current.left): 0;
    let rightDepth = current.right !==null? this.maxDepth(current.right): 0;

    return 1 + Math.max(leftDepth, rightDepth);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node){
      if(node === null) return 0;
      let leftSum = maxSumHelper(node.left);
      let rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val+leftSum+rightSum);
      return Math.max(0, leftSum+node.val, rightSum+node.val)
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // if tree is empty return null;
    if(!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while(queue.length){
      let currentNode =queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest ===null;

      if(higherThanLowerBound && shouldReassignClosest){
        closest = currentVal;
      }

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right)  queue.push(currentNode.right);

    }

    return closest;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

let smallTree;
let largeTree;
let emptyTree;


  emptyTree = new BinaryTree();

  // build small tree;
  let smallLeft = new BinaryTreeNode(5);
  let smallRight = new BinaryTreeNode(5);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  smallTree = new BinaryTree(smallRoot);

  // build large tree
  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
