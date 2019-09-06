var countAndSay = function (n) {
  let count = 1;
  let res = 1;
  let result = '';
  while (count <= n) {
    result = say(res.toString());
    res = parseInt(result)
    count++;
  }
  console.log(result)

};

var say = function (input) {
  let result = '';
  let current = input[0];
  let currentCount = 1;
  for (let i = 0; i < input.length; i++) {
    if (current === input[i + 1]) {
      currentCount++;
    } else {
      result += currentCount;
      result += input[i];
      current = input[i + 1];
      currentCount = 1;
    }
  }
  console.log(result)
  return result;
}

countAndSay(1)
