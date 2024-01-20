class HashMap {
    constructor() {
      this.map = {};
    }
  
    // Method to add a key-value pair to the hashmap
    put(key, value) {
      this.map[key] = value;
    }
  
    // Method to get the value associated with a key
    get(key) {
      return this.map[key];
    }
  
    // Method to check if the hashmap contains a key
    containsKey(key) {
      return this.map.hasOwnProperty(key);
    }
  
    // Method to remove a key-value pair from the hashmap
    remove(key) {
      if (this.containsKey(key)) {
        delete this.map[key];
      }
    }
  
    // Method to get all keys in the hashmap
    keys() {
      return Object.keys(this.map);
    }
  
    // Method to get all values in the hashmap
    values() {
      return Object.values(this.map);
    }
  
    // Method to get the size of the hashmap
    size() {
      return Object.keys(this.map).length;
    }
  
    // Method to clear the hashmap
    clear() {
      this.map = {};
    }
  }
  
  // Example usage:
  const myHashMap = new HashMap();
  
  myHashMap.put('name', 'John');
  myHashMap.put('age', 25);
  myHashMap.put('city', 'New York');
  
  console.log(myHashMap.get('name')); // Output: John
  console.log(myHashMap.containsKey('age')); // Output: true
  
  myHashMap.remove('city');
  console.log(myHashMap.keys()); // Output: ['name', 'age']
  console.log(myHashMap.values()); // Output: ['John', 25]
  
  console.log(myHashMap.size()); // Output: 2
  
  myHashMap.clear();
  
  console.log(myHashMap.size()); // Output: 0