function reverseFactorial(num) {
  let len = num;
  if (num == 1) {
    return true;
  }

  for (let i = 2; i <= len; i++) {
    if ((num / i) % 1) {
      return false;
    }
    if (num / i == 1) {
      return true;
    }
    num = num / i;
  }
  return false
}




console.log(reverseFactorial(120));
console.log(reverseFactorial(2));
console.log(reverseFactorial(3));
console.log(reverseFactorial(6));

