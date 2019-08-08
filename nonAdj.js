// var nonAdj = function (arr) {
//   let largest = arr[0] + arr[2];
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 2; j < arr.length; j++) {
//       if (arr[i] + arr[j] > largest) {
//         largest = arr[i] + arr[j];
//       }
//     }
//   }
//   console.log(largest);
//   return largest;
// }


// var nonAdj = function (arr) {
//   let oddSum = arr[1];
//   let evenSum = arr[0];

//   for (let i = 2; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       let tempEvenSum = arr[i] + evenSum;
//       if (tempEvenSum > evenSum) {
//         evenSum = tempEvenSum;
//       }
//     } else {
//       let tempOddSum = arr[i] + oddSum;
//       if (tempOddSum > oddSum) {
//         oddSum = tempOddSum;
//       }
//     }
//   }
//   console.log(oddSum > evenSum ? oddSum : evenSum);
//   return oddSum > evenSum ? oddSum : evenSum;
// }


var nonAdj = function (arr) {

}

let n = [2, 4, 6, 2, 5];
let me = [5, 1, 1, 5];

nonAdj(me);
