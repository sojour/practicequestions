function validAnagram(s1, s2) {
  // add whatever parameters you deem necessary - good luck!

  if (s1.length !== s2.length) {
    return false;
  }

  let s1Count = {};
  let s2Count = {};

  for (let letter of s1) {
    s1Count[letter] = (s1Count[letter] || 0) + 1;
  }

  for (let letter of s2) {
    s2Count[letter] = (s2Count[letter] || 0) + 1;
  }

  for (let key in s1Count) {
    if (!key in s2Count) {
      return false;
    }
    if (s1Count[key] !== s2Count[key]) {
      return false;
    }
  }
  return true;
}
