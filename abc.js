const abc = (A, B, C) => {
  const totalLength = A + B + C;
  let hash = {
    a: A,
    b: B,
    c: C
  }

  let result = '';

  while (result.length < totalLength) {
    let sorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);


    let max = hash[sorted[0]]
    let remainder = hash[sorted[1]] + hash[sorted[2]];
    if (remainder !== 0 && Math.ceil((max / remainder)) > 4 && max < 3) {
      return false;
    }
    if (result[result.length - 1] === sorted[0] && result[result.length - 2] === sorted[0]) {
      return false;
    } else {
      if (hash[sorted[0]] >= 2) {
        result += sorted[0];
        result += sorted[0];
        hash[sorted[0]]--;
        hash[sorted[0]]--;
      } else if (hash[sorted[0]] > 0) {
        result += sorted[0];
        hash[sorted[0]]--;
      }

      if (max / 2 < remainder && hash[sorted[1]] >= 2) {
        result += sorted[1];
        result += sorted[1];
        hash[sorted[1]]--;
        hash[sorted[1]]--;
      } else if (hash[sorted[1]] > 0) {
        result += sorted[1];
        hash[sorted[1]]--;
      }

    }
  }
  console.log(result.length)
  return result
}


console.log(abc(0, 0, 0));
console.log(abc(10, 5, 1))

