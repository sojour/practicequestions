function caesarCipherEncryptor(string, key) {
  let result = '';
  let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let alphabetDic = alphabetArray.reduce((acc, curr, idx) => {
    acc[curr] = idx + 1;
    return acc
  }, {});

  for (let i = 0; i < string.length; i++) {
    let newKey = ((alphabetDic[string[i]] + key) % 26) - 1;
    newKey = newKey === -1 ? 25 : newKey
    result += alphabetArray[newKey]
  }
  return result;
}
