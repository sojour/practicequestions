function sortColumns(input) {

  let arrayToSort = [];
  //construction an Array that holds each individual person and their information together
  let sortStuff = input.split("\n");
  for (let i = 0; i < sortStuff.length; i++) {
    let elements = sortStuff[i].split(",");
    for (let j = 0; j < elements.length; j++) {
      arrayToSort[j] ? null : arrayToSort[j] = [];
      arrayToSort[j][i] = elements[j];
    }
  }

  //sorting by name
  arrayToSort.sort((a, b) => {
    const nameOne = a[0].toLowerCase();
    const nameTwo = b[0].toLowerCase()
    return nameOne > nameTwo ? 1 : -1;
  }
  );
  let outputArray = [];

  //reconstructing into the origina format: name / number / number
  for (let i = 0; i < arrayToSort[0].length; i++) {
    let outputString = arrayToSort.reduce((prev, curr) => {
      return prev == "" ? prev = curr[i] : prev + "," + curr[i];
    }, "");

    outputArray[i] = outputString;
  }

  //joining the individually parts that has been sorted by name
  return outputArray.join("\\n");
}

console.log(sortColumns("steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5"));
