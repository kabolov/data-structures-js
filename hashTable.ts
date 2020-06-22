// const hash = () => {
//   const ALFA_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const ALFA = "abcdefghijklmnopqrstuvwxyz";
//   const DIGITS = "123456789";
//   let res = "";
//   const letters = ALFA_UPPER + ALFA + DIGITS;
//   const quantity = 64;

//   for (let i = 0; i < quantity; i++) {
//     const letter = letters[Math.floor(Math.random() * letters.length)];
//     res += letter;
//   }

//   return res;
// };

// console.log(hash());

interface HashTable {
  buckets: any[];
  size: number;
}

class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);

    return index;
  }

  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
  }
}
