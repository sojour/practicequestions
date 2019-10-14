function wordCountEngine(document) {
  // your code goes here
  let puncDic = ["'", '"', ',', '!', '.', '?', ';', ':'];
  let docCopy = ''
  let docCopy2 = [];

  for (let i = 0; i < document.length; i++) {
    if (!puncDic.includes(document[i])) {
      docCopy += document[i].toLowerCase();
    }
  }
  docCopy = docCopy.split(' ');

  for (let j = 0; j < docCopy.length; j++) {
    if (docCopy[j] !== '') {
      docCopy2.push(docCopy[j]);
    }
  }

  let wordMap = new Map();
  docCopy2.forEach((word, index) => {
    if (wordMap.has(word)) {
      let count = wordMap.get(word);
      wordMap.set(word, count += 1);
    } else {
      wordMap.set(word, 1);
    }
  })

  let bucket = [];
  wordMap.forEach((value, key) => {
    bucket[0] = [];
    if (!bucket[value]) {
      bucket[value] = [];
    }
    bucket[value].push([key])
  })

  let result = [];

  for (let k = bucket.length - 1; k > 0; k--) {
    for (let l = 0; l < bucket[k].length; l++) {
      result.push([bucket[k][l][0], `${k}`])
    }
  }
  return result;
}
