function longestPalindromicSubstring(string) {
  // Write your code here.
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = getLongest(string, i - 1, i + 1);
    let even = getLongest(string, i - 1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongest(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] == string[rightIdx]) {
      leftIdx--;
      rightIdx++;
    } else {
      break;
    }
  }
  return [leftIdx + 1, rightIdx]
}
