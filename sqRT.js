var mySqrt = function (x) {
  let low = 0;
  let high = x;

  while (low <= high) {
    let mid = Math.floor((low + ((high - low) / 2)));
    let midSq = mid * mid;

    if (midSq > x) {
      high = mid - 1;
    } else if (midSq < x) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return high;
};
