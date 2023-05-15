/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      let newNode = new Node(val);
      if(this.head === null) this.head = newNode;
      if(this.tail !==null) this.tail.next = newNode;
      this.tail = newNode;
      this.length +=1 ;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head !==null) {
      newNode.next = this.head;
      this.head = newNode;
    }
    if(this.tail ===null) this.tail = newNode;
    this.head = newNode;  
    this.length +=1;  
  }

  /** pop(): return & remove last item. */

  pop() {

    if(this.length === 0){
        console.log(`list is empty`); 
        return;
      }
    
    if(this.length === 1){
      let deleted = this.head.val;
      this.head = null;
      this.tail = null;
      this.length =0;
      return deleted;
    }

    let currentNode = this.head;
    while(currentNode.next!==this.tail){
       currentNode = currentNode.next;
    }
    let deleted = this.tail;
    this.tail =currentNode;
    currentNode.next =null;
    this.length -=1;
    return deleted.val;
  }

  /** shift(): return & remove first item. */

  shift() {

    if(this.length === 0){
      console.log(`list is empty`); 
      return;
    }

    if(this.length === 1){
      let deleted = this.head.val;
      this.head = null;
      this.tail = null;
      this.length =0;
      return deleted;
    }

    let deleted = this.head.val;
    this.head = this.head.next;
    this.length -=1;
    return deleted;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid index.");
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while(currentIdx !==idx){
      currentNode = currentNode.next;
      currentIdx +=1
    }
    return currentNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid index.");
    }

    let currentIdx = 0;
    let currentNode= this.head;

    while(currentIdx !==idx){
      currentNode = currentNode.next;
      currentIdx +=1
    }
    currentNode.val=val;
    return;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if(idx > this.length || idx < 0){
      throw new Error("Invalid index.");
    }
    
    if(idx === this.length ||this.length ===0){
      this.push(val);  
      return;
    }


    let newNode = new Node(val);
    let currentIdx = 0;
    let currentNode= this.head;

    while(currentIdx !==idx-1){
      currentNode = currentNode.next;
      currentIdx +=1
    }

    let nextCurrentNode = currentNode.next;
    currentNode.next =newNode;
    newNode.next = nextCurrentNode;
    this.length +=1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid index.");
    }

    // only one item left in list.
    if(this.length === 1){
      let deleted = this.head.val;
      this.head = null;
      this.tail = null;
      this.length =0;
      return deleted;
    }
  
    //removing head 
    if(idx===0){
        this.shift();
    }

    // removing tail
    if(idx === this.length -1){
      this.pop();
    }
 

    let currentIdx = 0;
    let currentNode= this.head;

    while(currentIdx !==idx-1){
      currentNode = currentNode.next;
      currentIdx +=1
    }
    let deleted = currentNode.next.val;
    currentNode.next = currentNode.next.next;
    this.length -=1;
    return deleted;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length ===0){
      return 0;
    }

    let currentNode = this.head;
    let sum=currentNode.val;
    while(currentNode.next !==null){
      currentNode = currentNode.next
      sum += currentNode.val;
    }
    return sum/this.length;    
   
  }
}

module.exports = LinkedList;
