interface StackNode {
  value: any;
  next: any;
}

interface Stack {
  root: any;
  n: number;
}

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  push(value) {
    let old = this.root;
    this.root = new StackNode(value);
    this.root.next = old;
    this.n++;
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    let old = this.root;
    this.root = old.next;
    this.n--;

    return old.value;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.size());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
