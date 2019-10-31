var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (!left) {
    console.log('here')
    return right;
  }

  if (!right) {
    return left;
  }

  return root
};


//with ancestor property

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let d1Depth = getDepth(descendantOne, topAncestor);
  let d2Depth = getDepth(descendantTwo, topAncestor);


  if (d1Depth > d2Depth) {
    return backTrack(descendantOne, descendantTwo, d1Depth - d2Depth);
  } else {
    return backTrack(descendantTwo, descendantOne, d2Depth - d1Depth);
  }
}

function getDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant != topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backTrack(small, large, difference) {
  while (difference > 0) {
    small = small.ancestor;
    difference--;
  }

  while (small != large) {
    small = small.ancestor;
    large = large.ancestor;
  }
  return small;
}
