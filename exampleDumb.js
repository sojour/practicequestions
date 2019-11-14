function dumb(num) {
  let total = 0;
  for (let i = 1; i <= 12; i++) {
    total += num * (2 * i - 1);
  }

  return total;
}

console.log(dumb((1 / 156)))
