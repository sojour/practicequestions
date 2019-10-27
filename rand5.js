//write rand5 with only rand7();
const rand5 = () => {
  let result = 10;
  while (result > 7) {
    result = rand7();
  }
  return result;
}
