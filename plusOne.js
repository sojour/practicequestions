var plusOne = function (digits) {
  let carry = 0;
  let total = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (i == digits.length - 1) {
      total = digits[i] + 1 + carry;
      if (total >= 10) {
        digits[i] = total % 10;
        carry = 1;
      } else {
        digits[i] = total;
      }
    } else if (carry) {
      total = digits[i] + carry
      if (total >= 10) {
        digits[i] = total % 10;
        carry = 1;
      } else {
        digits[i] = total;
        carry = 0;
      }
    }

  }
  if (carry) {
    digits.unshift(1)
  }
  return digits
};
