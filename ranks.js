function solution(ranks) {
  // write your code in JavaScript (Node.js 8.9.4)
  const rankCount = ranks.reduce((allRanks, rank) => {
    if (allRanks[rank]) {
      allRanks[rank]++;
    } else {
      allRanks[rank] = 1;
    }
    return allRanks
  }, {})

  let reports = 0;

  for (let rank in rankCount) {
    if (rankCount[+rank + 1]) {
      reports += rankCount[rank];
    }
  }
  console.log(reports)
  return reports
}

solution([1, 1, 5, 7])
