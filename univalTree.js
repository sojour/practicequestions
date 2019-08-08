function countUnival(root, result = { val: 0 }) {
  if (!root) {
    return 0;
  }
  result.val += isUnival(root, root.val);
  countUnival(root.left, result);
  countUnival(root.right, result);

  return result.val;
}

//takes into type coersion of JS where 1+true = 2

function isUnival(root, val) {
  return root ? root.val === val && isUnival(root.left, val) && isUnival(root.right, val) : 1;
}
