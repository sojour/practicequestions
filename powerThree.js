var isPowerOfThree = function (n) {
  let res = Math.log10(n) / Math.log10(3);
  return (res % 1) === 0
};
