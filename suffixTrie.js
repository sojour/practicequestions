class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      this.insertSuffix(string, i);
    }
  }

  insertSuffix(string, i) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        node[letter] = {};
        node = node[letter];
      } else {
        node = node[letter];
      }
    }
    node[this.endSymbol] = true;
  }

  contains(string) {
    // Write your code here.
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!(letter in node)) {
        return false;
      } else {
        node = node[letter]
      }
    }
    return this.endSymbol in node;
  }
}
