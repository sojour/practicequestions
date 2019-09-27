function numberOfWaysToMakeChange(n, denoms) {
  let ways = (new Array(n + 1)).fill(0);

  ways[0] = 1;

  for (let denom of denoms) {
    for (let amount = 1; amount < (n + 1); amount++) {
      if (amount >= denom) {
        ways[amount] += ways[amount - denom]
      }
    }
  }
  return ways[n];
}

numberOfWaysToMakeChange(6, [1, 2])
