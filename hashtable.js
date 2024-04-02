// HashTable class aand you can change the size of the table;
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function
  hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size; //example "muthuri".charCodeAt(0)= 109; then we find the modulas (the size of the hashtable) like 109%11 or 109%12 0r 109%6 etc  so 109%10 = 9 which will fit inside;
    }
    return hash;
  }

  // Insert key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Check if a key exists in the hash table
  search(key) {
    const index = this.hash(key);
    if (!this.table[index]) return false;
    //looping because there could be a collisiong resulting to linkedList
    for (let item of this.table[index]) {
      if (item.key === key) {
        return true;
      }
    }
    return false;
  }
}

// Example usage
const hashTable = new HashTable();

//getting the data from the file
const fs = require("fs");
const words = fs.readFileSync("./data/data.txt", "utf8").split("\n");

//feeding words to the hash table
words.forEach((word) => hashTable.insert(word.trim(), true));

// getting user input
// const userInput = prompt(
//   "Guess name which exists ☺️ and I will tell you if it exists ☺️"
// );
//const word = "kennedy";
// const exists = hashTable.search(word);
// if (exists) {
//   console.log("Word exists in the hash table.");
// } else {
//   console.log("Word does not exist in the hash table.");
// }
// console.log(exists);

// Checking if userinput exists in the hash table
//const exists = hashTable.search(userInput);
function lookupWord(word) {
  //const word = document.getElementById("inputWord").value.trim();
  const exists = hashTable.search(word);
  const resultElement = document.getElementById("result");
  if (exists) {
    resultElement.textContent = "Word exists in the hash table.";
  } else {
    resultElement.textContent = "Word does not exist in the hash table.";
  }
  console.log(exists);
  // resultElement.textContent = exists
  //   ? "Word exists in the hash table."
  //   : "Word does not exist in the hash table.";
}

//console.log(exists);
