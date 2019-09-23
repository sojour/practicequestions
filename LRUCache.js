// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.usage = [];
  }

  get(key) {
    let value = this.cache[key];

    if (!value) {
      return -1;
    } else {

      return this.cache[key];
    }
  }

  put(key, value) {
    if (this.cache[key]) {
      return;
    }

    let currentLength = Object.keys(this.cache).length;

    if (currentLength < this.capacity) {
      this.cache[key] = value;
      this.usage.push(key)
    }
  }
}
