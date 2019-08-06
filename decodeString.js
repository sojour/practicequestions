// var decodeString = function (s) {
//   let result = "";
//   let subString = "";
//   let subStringT = "";
//   let counter = "";
//   let countTracker = [];
//   let bracketS = [];
//   let closingS = [];
//   let nums = '0123456789'
//   let subMaster = "";

//   for (let i = 0; i < s.length; i++) {
//     debugger
//     if (s[i] === '[') {
//       bracketS.push(i)
//       countTracker.push(parseInt(counter))
//       counter = ""

//     } else if (s[i] === ']') {
//       closingS.push(i);
//       let lastIndex = bracketS[bracketS.length - 1];
//       bracketS.pop();
//       let counterInt = countTracker[countTracker.length - 1];
//       countTracker.pop();
//       subString = s.slice(lastIndex + 1, i);
//       subStringT = subString.repeat(counterInt);
//       subMaster += subStringT;

//       if (!bracketS[0]) {
//         result += subMaster;
//         subMaster = '';
//       }

//     } else if (nums.includes(s[i])) {
//       counter += s[i];
//     }
//   }
//   result += s.slice(closingS[closingS.length - 1] + 1)
//   console.log(result);
// };


var decodeString = function (s) {
  let result = "";
  let counter = 0;
  let subString = "";
  let opened = 0;

  for (let i = 0; i < s.length; i++) {
    let chr = s[i];
    if (opened >= 1) subString += chr;
    if (chr == "[") opened++;
    else if (chr == "]") {
      opened--;
      if (opened == 0) {
        for (let j = 0; j < counter; j++) {
          result += decodeString(subString);
        }
        counter = 0;
        subString = "";
      }
    } else {
      if (opened == 0) {
        if (chr >= 0 || chr <= 9) counter = `${counter}${chr}`;
        else result += chr;
      }
    }
  }
  return result;
};

console.log(decodeString("3[a]2[bc]")) // "aaabcbc".
console.log(decodeString("3[a2[c]]")), // "accaccacc".
  console.log(decodeString("2[abc]3[cd]ef")) // "abcabccdcdcdef"
