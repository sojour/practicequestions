function checkMagazine(magazine, note) {

  let magazineDic = magazine.reduce((sent, word) => {
    if (word in sent) {
      sent[word]++;
    }
    else {
      sent[word] = 1;
    }
    return sent;
  }, {})

  let noteDic = note.reduce((sent, word) => {
    if (word in sent) {
      sent[word]++;
    }
    else {
      sent[word] = 1;
    }
    return sent;
  }, {})

  let result = 0;

  for (let key in noteDic) {
    if (!magazineDic[key]) {
      result++;
    } else if (noteDic[key] > magazineDic[key]) {
      result++;
    }
  }

  if (result > 0) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}
