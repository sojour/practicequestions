function conseqTimesRange(num1, num2) {

  let result = 0;

  let rootA = Math.floor(Math.sqrt(num1)); //2
  let rootB = Math.floor(Math.sqrt(num2)); //4

  const startNum = rootA * (rootA + 1); //6
  const endNum = rootB * (rootB + 1); //20

  if (startNum >= num1 && startNum <= num2) {
    result++;
  }

  if (endNum >= num1 && endNum <= num2) {
    result++;
  }

  result += rootB - rootA - 1;

  return result;
}


console.log(conseqTimesRange(0, 1));
