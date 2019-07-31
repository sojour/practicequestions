var frequencySort = function (s) {
  let sArray = s.split('');
  let result = "";
  let freqObj = sArray.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {})

  let keys = Object.keys(freqObj)
  keys = keys.sort((a, b) => {
    return freqObj[b] - freqObj[a]
  })

  let maxOccurence = Math.max(...Object.values(freqObj));
  let bucket = new Array(maxOccurence)

  keys.forEach(ele => {
    for (let i = 0; i < freqObj[ele]; i++) {
      result += ele
    }
  })
  return result;
};

string1 = 'cccAaa'

frequencySort(string1)
