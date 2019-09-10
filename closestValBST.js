//Recursive Solution
function findClosestValueInBst(tree, target) {
  return helper(tree, target, closest = tree.value)
}


function helper(tree, target, closest) {
  if (!tree) {
    return closest;
  }
  if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return helper(tree.left, target, closest);
  } else if (target > tree.value)
    return helper(tree.right, target, closest);
  else {
    return closest
  }
}


//iterative
function findClosestValueInBst(tree, target) {
  let closest = Infinity;

  while (tree) {
    if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      tree = tree.left;
    } else if (target > tree.value) {
      tree = tree.right;
    } else {
      return closest;
    }
  }
  return closest
}

