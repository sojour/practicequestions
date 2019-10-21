function findGrantsCap(grantsArray, newBudget) {
  // your code goes here

  let sortedGrants = grantsArray.sort((a, b) => b - a);

  for (let i = 0; i < sortedGrants.length; i++) {
    let remainder = sortedGrants.slice(i).reduce((acc, curr) => acc + curr, 0);
    let ifCap = sortedGrants[i] * (i) + remainder;

    if (ifCap === newBudget) {
      return sortedGrants[i];
    }

    if (ifCap < newBudget) {
      let cap = (newBudget - remainder) / (i);
      return cap;
    }

  }
  return (newBudget / (grantsArray.length));
}


console.log(findGrantsCap([1, 5, 2, 10], 9))
