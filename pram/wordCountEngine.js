function wordCountEngine(document) {
  // your code goes here
  let puncDic = "!?.,;:'";
  let docCopy = ''

  for (let i = 0; i < document.length; i++) {
    if (!puncDic.includes(document[i])) {
      docCopy += document[i].toLowerCase();
    }
  }

  docCopy = docCopy.split(' ');

  let object = docCopy.reduce((acc, word) => {
    if (word in acc) {
      acc[word]++;
    }
    else {
      acc[word] = 1;
    }
    return acc;
  }, {})

  let keys = Object.keys(object);
  keys = keys.sort((a, b) => {
    return object[b] - object[a]
  })

  let result = []

  for (let j = 0; j < keys.length; j++) {
    result.push([keys[j], `${object[keys[j]]}`])
  }

  return result
}

document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

wordCountEngine(document)
