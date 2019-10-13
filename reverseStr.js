var reverseStr = function (s, k) {
  const length = s.length;
  const dLength = 2 * k;
  let result = '';

  for (let i = 0; i < s.length; i += dLength) {
    if (i + k >= s.length) {
      result += (s.slice(i, i + k)).split('').reverse().join('');
    } else if (i + dLength > s.length) {
      result += (s.slice(i, i + k)).split('').reverse().join('');
      result += (s.slice(i + k));
    } else {
      console.log(i)
      result += (s.slice(i, i + k)).split('').reverse().join('');
      result += (s.slice(i + k, i + k + k))
    }
  }
  return result
};
