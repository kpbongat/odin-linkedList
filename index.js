class LinkedList {
  head;
  tail;
  append(value) {
    if (!this.head) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.pointer != null) {
        currentNode = currentNode.pointer;
      }
      const newNode = new Node(value);
      currentNode.pointer = newNode;
      this.tail = newNode;
    }
  }
}

class Node {
  pointer = null;
  constructor(value) {
    this.value = value;
  }
}
