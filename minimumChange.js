function minNumberOfCoinsForChange(n, denoms) {
  let ways = new Array(n + 1).fill(Infinity);
  ways[0] = 0;

  for (let denom of denoms) {
    for (let amount = 1; amount < ways.length; amount++) {
      if (amount >= denom) {
        ways[amount] = Math.min(ways[amount], (1 + ways[amount - denom]))
      }
    }
  }

  return ways[n] === Infinity ? -1 : ways[n]
}

function greedy(n, denoms) {
  function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    let total = n;
    let count = 0;
    let iterator = 0;
    if (n === 0) {
      return 0;
    }

    denoms = denoms.sort((a, b) => { return b - a });

    while (total > 0 && iterator < denoms.length) {
      console.log(denoms[iterator])

      if (denoms[iterator] <= total) {
        total -= denoms[iterator];
        count++;
      } else {
        iterator++;
      }
    }

    if (total == 0) {
      return count
    } else {
      return -1;
    }
  }
}
