function keys(sentences, keys) {
  let result = {};
  let holder = [];
  let keyObj = {};
  const len = sentences.length;
  let newArray = Array(len).fill().map(_ => ({}));

  for (let x = 0; x < keys.length; x++) {
    keyObj[keys[x]] = 1;
  }

  for (let i = 0; i < len; i++) {
    let sentence = sentences[i].split(' ');
    for (let j = 0; j < sentence.length; j++) {
      let key = sentence[j];
      if (!newArray[i][key]) {
        newArray[i][key] = 1;
      }
    }
  }



  for (let k = 0; k < newArray.length; k++) {
    for (let l = 0; l < keys.length; l++) {
      let currKey = keys[l];
      if (currKey in newArray[k] && l == keys.length - 1) {
        holder.push(newArray[k]);
      } else if (!currKey in newArray[k]) {
        break;
      }
    }
  }

  for (let n = 0; n < holder.length; n++) {
    for (let key in holder[n]) {
      if (!result[key] && !keyObj[key]) {
        result[key] = 1;
      }
    }
  }

  return Object.keys(result);

}


// console.log(keys(['I love love Datadog Datadog', 'I like Datadog'], ['I', 'Datadog']))
console.log(keys(['I love love Datadog Datadog', 'I like Datadog'], ['Datadog']))
