var lengthOfLongestSubstring = function (s) {
  let lastIndices = {};
  let length = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char in lastIndices) {
      start = Math.max(lastIndices[char], start);
    }
    length = Math.max(i - start + 1, length);
    lastIndices[char] = i + 1;
  }
  return length;
};
