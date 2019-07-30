var frequencySort = function (s) {
  let sArray = s.split('');
  let touple = []
  let freqObj = sArray.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {})

  let keys = Object.keys(freqObj);
  let maxOccurence = Math.max(...Object.values(freqObj));

  let bucket = new Array(maxOccurence)
};
