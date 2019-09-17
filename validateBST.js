function validateBst(tree) {
  return helper(tree);
}

function helper(node, min = -Infinity, max = Infinity) {
  if (!node) {
    return true;
  } if (node.value < min || node.value >= max) {
    return false;
  }
  return helper(node.left, min, node.value) && helper(node.right, node.value, max)
}
