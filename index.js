class LinkedList {
  head;
  tail;
  size = 0;
  append(value) {
    if (!this.head) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
    } else {
      let currentNode = this.head;
      while (currentNode.pointer != null) {
        currentNode = currentNode.pointer;
      }
      const newNode = new Node(value);
      currentNode.pointer = newNode;
      this.tail = newNode;
      this.size = this.size + 1;
    }
  }

  prepend(value) {
    if (!this.head) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(value);
      newNode.pointer = this.head;
      this.head = newNode;
      this.size = this.size + 1;
    }
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.pointer;
    }
    return currentNode;
  }
}

class Node {
  pointer = null;
  constructor(value) {
    this.value = value;
  }
}
