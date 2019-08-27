function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}



var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[root])

  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))

  return root
};
