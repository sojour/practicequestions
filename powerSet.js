function powerset(array) {
  // Write your code here.
  let subsets = [[]];

  for (const num of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      let newSubset = subsets[i].concat(num);
      subsets.push(newSubset)
    }
  }
  return subsets;
}
