function maxDepth(T, values = []) {
  if (!T) {
    return values.length;
  } else if (values.includes(T.x)) {
    return values.length;
  } else {
    return Math.max(maxDepth(T.l, [...values, T.x]), maxDepth(T.r, [...values, T.x]))
  }
}
