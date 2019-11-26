function patternMatch(word1, word2) {
  let word1Num = null;
  let word2Num = null;

  let diff = 0;

  let word1Dic = {};
  let word2Dic = {};

  for (const letter of word1) {
    if (parseInt(letter)) {
      word1Num = parseInt(letter);
    } else {
      if (letter in word1Dic) {
        word1Dic[letter]++
      } else {
        word1Dic[letter] = 1;
      }
    }
  }

  for (const letter of word2) {
    if (parseInt(letter)) {
      word1Num = parseInt(letter);
    } else {
      if (letter in word2Dic) {
        word2Dic[letter]++
      } else {
        word2Dic[letter] = 1;
      }
    }
  }

  for (const key in word2Dic) {
    if (key in word1Dic) {
      diff += Math.abs(word2Dic[key] - word1Dic[key]);
    } else {
      diff += word2Dic[key]
    }
  }

  return diff == word1Num;
}


console.log(patternMatch('d2tadog', 'datadog'));
console.log(patternMatch('2', 'ae'));
console.log(patternMatch('2eeeee', 'e'));

