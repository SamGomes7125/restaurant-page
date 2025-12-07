export default class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0; // number of stored keys
  }

  // ---------- HASH FUNCTION ----------
  hash(key) {
    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  // Throws an error for out-of-range indices
  checkIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  // ---------- RESIZE FUNCTION ----------
  grow() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }

  // ---------- SET ----------
  set(key, value) {
    if (typeof key !== "string")
      throw new Error("Keys must be strings.");

    const index = this.hash(key);
    this.checkIndex(index);

    const bucket = this.buckets[index];

    // Check if key exists: update value
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    // Key does not exist → insert new
    bucket.push({ key, value });
    this.size++;

    // Resize if exceeded load factor
    if (this.size / this.capacity > this.loadFactor) {
      this.grow();
    }
  }

  // ---------- GET ----------
  get(key) {
    const index = this.hash(key);
    this.checkIndex(index);

    const bucket = this.buckets[index];

    for (const entry of bucket) {
      if (entry.key === key) return entry.value;
    }
    return null;
  }

  // ---------- HAS ----------
  has(key) {
    return this.get(key) !== null;
  }

  // ---------- REMOVE ----------
  remove(key) {
    const index = this.hash(key);
    this.checkIndex(index);

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  // ---------- LENGTH ----------
  length() {
    return this.size;
  }

  // ---------- CLEAR ----------
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // ---------- KEYS ----------
  keys() {
    const arr = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        arr.push(entry.key);
      }
    }
    return arr;
  }

  // ---------- VALUES ----------
  values() {
    const arr = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        arr.push(entry.value);
      }
    }
    return arr;
  }

  // ---------- ENTRIES ----------
  entries() {
    const arr = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        arr.push([entry.key, entry.value]);
      }
    }
    return arr;
  }
}
