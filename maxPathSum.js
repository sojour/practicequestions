function maxPathSum(tree) {
  // Write your code here.
  const [holder, maxSum] = [...find(tree)];
  return maxSum;
}

function find(tree) {
  if (!tree) {
    return [0, 0];
  }

  const [leftSumBranch, leftPathSum] = find(tree.left);
  const [rightSumBranch, rightPathSum] = find(tree.right);

  const maxIndivSumBranch = Math.max(leftSumBranch, rightSumBranch);

  const { value } = tree;

  const maxSumBranch = Math.max(maxIndivSumBranch + value, value);

  const maxSumWithRoot = Math.max(maxSumBranch, leftSumBranch + rightSumBranch + value);

  const maxPathSum = Math.max(leftPathSum, rightPathSum, maxSumWithRoot);

  return [maxSumBranch, maxPathSum];
}
