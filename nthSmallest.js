var kthSmallest = function (root, k) {
  let a = getArray(root, []);
  return a[k - 1]
};

function getArray(root, arr) {
  if (!root) {
    return [];
  }

  if (root.left) {
    getArray(root.left, arr)
  }
  arr.push(root.val)
  if (root.right) {
    getArray(root.right, arr)
  }
  return arr
}
