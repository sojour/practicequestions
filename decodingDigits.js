function numDecodings(s) {
  if (s.length === 0) {
    return 0;
  }

  const n = s.length;
  const count = Array(n + 1).fill(0);

  count[0] = 1;
  count[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i < count.length; i++) {
    if (s[i - 1] > '0') {
      count[i] = count[i - 1]
    }

    if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] < '7') {
      count[i] += count[i - 2]
    }
  }
  console.log(count)
  console.log(count[n])
  return count[n]

}

let s = '101';

numDecodings(s)
