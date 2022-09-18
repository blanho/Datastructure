// BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        // left
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        // right
        else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    let found = false;
    if (this.root === null) return found;
    let current = this.root;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) current = current.right;
      else found = true;
    }
    return found;
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
console.log(tree.find(10));

// Big O of BST
// Insertion: O(logn)
// Searching: O(logn)
