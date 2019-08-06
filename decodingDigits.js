function numDecodings(s) {
  if (s.length <= 0) {
    return 0;
  }

  let length = s.length;
  let counter = new Array(length + 1).fill(0);

  counter[0] = 1;
  counter[1] = s[0] === '0' ? 0 : 1

  for (let i = 2; i < counter.length; i++) {
    if (s[i - 1] !== '0') {
      counter[i] = counter[i - 1]
    };
    if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] < '7') {
      counter[i] += counter[i - 2]
    }

  }
  console.log(counter[length]);
  return counter[length];
}

let s = '11111'

numDecodings(s)
