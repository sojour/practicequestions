function countUnival(root, result = { val: 0 }) {
  if (!root) {
    return 0;
  }
  result.val += isUnival(root, root.val);
  countUnival(root.left, result);
  countUnival(root.right, result);

  return result.val;
}

function isUnival(root, val) {
  return root ? root.val === val && isUnival(root.left, val) && isUnival(root.right, val) : 1;
}
