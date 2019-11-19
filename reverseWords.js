var reverseWords = function (s) {
  let wordArray = s.split(' ');
  let result = '';

  for (let i = wordArray.length - 1; i >= 0; i--) {
    let currWord = wordArray[i];
    if (!currWord == ' ') {
      result += `${currWord} `;
    }
  }
  return result.slice(0, result.length - 1);
};
