function factorial(num) {
  let result = 1;
  if (num == 1 || num == 0) {
    return 1;
  } else {
    result = num * factorial(num - 1)
  }
  return result;
}

console.log(factorial(5))
console.log(factorial(0))
