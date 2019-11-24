function largestInsertFive(num) {
  let numArray = num.toString().split('');

  if (numArray[0] == '-') {
    for (let i = 1; i < numArray.length; i++) {
      const currNum = parseInt(numArray[i]);
      if (currNum >= 5) {
        let result = numArray.splice(0, i).concat([5]).concat(numArray);
        return parseInt(result.join(''));
      }
    }
  } else {
    for (let i = 0; i < numArray.length; i++) {
      const currNum = parseInt(numArray[i]);
      if (currNum <= 5) {
        let result = numArray.splice(0, i).concat([5]).concat(numArray);
        return parseInt(result.join(''));
      }

    }
  }
}

