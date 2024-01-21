class BTreeNode {
    constructor(isLeaf = true) {
      this.isLeaf = isLeaf;
      this.keys = [];
      this.children = [];
    }
  }
  
  class BTree {
    constructor(degree) {
      this.root = new BTreeNode();
      this.degree = degree;
    }
  
    insert(key) {
      const root = this.root;
  
      if (root.keys.length === (2 * this.degree) - 1) {
        const newRoot = new BTreeNode(false);
        newRoot.children.push(root);
        this._splitChild(newRoot, 0);
        this.root = newRoot;
        this._insertNonFull(newRoot, key);
      } else {
        this._insertNonFull(root, key);
      }
    }
  
    _insertNonFull(x, key) {
      let i = x.keys.length - 1;
  
      if (x.isLeaf) {
        x.keys.push(null);
        while (i >= 0 && key < x.keys[i]) {
          x.keys[i + 1] = x.keys[i];
          i--;
        }
        x.keys[i + 1] = key;
      } else {
        while (i >= 0 && key < x.keys[i]) {
          i--;
        }
        i++;
  
        if (x.children[i].keys.length === (2 * this.degree) - 1) {
          this._splitChild(x, i);
          if (key > x.keys[i]) {
            i++;
          }
        }
  
        this._insertNonFull(x.children[i], key);
      }
    }
    
  
    _splitChild(x, i) {
      const degree = this.degree;
      const y = x.children[i];
      const z = new BTreeNode(y.isLeaf);
  
      x.children.splice(i + 1, 0, z);
      x.keys.splice(i, 0, y.keys[degree - 1]);
  
      z.keys = y.keys.splice(degree, degree - 1);
  
      if (!y.isLeaf) {
        z.children = y.children.splice(degree, degree);
      }
    }
  
    search(key) {
      return this._search(this.root, key);
    }
  
    _search(x, key) {
      let i = 0;
  
      while (i < x.keys.length && key > x.keys[i]) {
        i++;
      }
  
      if (i < x.keys.length && key === x.keys[i]) {
        return true;
      } else if (x.isLeaf) {
        return false;
      } else {
        return this._search(x.children[i], key);
      }
    }
  }
  
  // Example Usage:
  const btree = new BTree(2);
  const keys = [3, 7, 1, 5, 12, 10, 8, 15, 6, 2, 11, 4, 9, 14, 13];
  keys.forEach((key) => {
    btree.insert(key);
  });
  
  const searchKey = 10;

  if (btree.search(searchKey)) {
    console.log(`The key ${searchKey} is present in the B-tree.`);
  } else {
    console.log(`The key ${searchKey} is not present in the B-tree.`);
  }