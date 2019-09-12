function isPalindrome(string) {
  let startingIdx = 0;
  let endingIdx = string.length - 1;

  while (startingIdx !== endingIdx && endingIdx - startingIdx !== -1) {
    if (string[startingIdx] !== string[endingIdx]) {
      return false;
    }
    startingIdx++;
    endingIdx--;
  }
  return true;
}
