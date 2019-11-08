function getPermutations(array) {
  // Write your code here.
  let permutations = [];
  helper(array, [], permutations);
  return permutations;
}

function helper(array, permutation, permutations) {
  if (!array.length && permutation.length) {
    permutations.push(permutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = permutation.concat(array[i]);
      helper(newArray, newPermutation, permutations)
    }
  }
  return permutations
}

