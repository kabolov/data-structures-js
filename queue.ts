interface QueueNode {
  value: any;
  next: any;
}

interface Queue {
  first: any;
  last: any;
  n: number;
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  isEmpty() {
    return this.first == null;
  }
  size() {
    return this.n;
  }

  enqueue(value) {
    let old = this.last;
    this.last = new QueueNode(value);

    if (this.isEmpty()) this.first = this.last;
    else old.next = this.last;

    this.n++;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last == null;
      return null;
    }

    let itemValue = this.first.value;
    this.first = this.first.next;

    this.n--;

    return itemValue;
  }
}

const q = new Queue();

console.log(q.isEmpty());
console.log(q.size());
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
console.log(q.isEmpty);
console.log(q.size());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
