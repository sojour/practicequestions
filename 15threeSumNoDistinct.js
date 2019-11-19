var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  const result = [];

  // console.log(sorted);

  for (let i = 0; i < sorted.length - 2; i++) {

    if (i > 0 && sorted[i] == sorted[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = sorted.length - 1;

    while (l < r) {
      let currSum = sorted[i] + sorted[l] + sorted[r];

      if (currSum == 0) {
        result.push([sorted[i], sorted[l], sorted[r]]);

        l++;
        r--;

        while (l < r && sorted[l] == sorted[l - 1]) {
          l++;
        }
        while (l < r && sorted[r] == sorted[r + 1]) {
          r--;
        }
      } else if (currSum < 0) {
        l++;
      } else {
        r--;
      }


    }
  }
  return result;
};
