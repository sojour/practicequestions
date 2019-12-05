var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let counter = 0;

  for (let interval of intervals) {
    if (result.length == 0) {
      result.push(interval)
    } else {
      let curr = result[counter]
      if (interval[0] >= curr[0] && interval[0] <= curr[1] && interval[1] > curr[1]) {
        curr[1] = interval[1];
      } else if (interval[0] > curr[1]) {
        counter++;
        result.push(interval);
      }
    }

  }
  return result;
};
