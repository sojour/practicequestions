function invertBinaryTree(tree) {
  if (tree) {
    let temp = tree.right
    tree.right = tree.left;
    tree.left = temp;

    invertBinaryTree(tree.right)
    invertBinaryTree(tree.left)
  }
  return tree
}
