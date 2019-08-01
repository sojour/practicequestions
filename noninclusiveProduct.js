// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?


function noninclusiveProduct(arr) {
  let allProduct = arr.reduce((acc, curr) => acc *= curr, 1)
  let result = arr.map((ele) => allProduct / ele)
  console.log(result)
}

function nonincluProduct(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i)
    let right = arr.slice(i + 1)

    leftProduct = left[0] ? left.reduce((acc, curr) => acc *= curr, 1) : 1
    rightProduct = right[0] ? right.reduce((acc, curr) => acc *= curr, 1) : 1

    result.push(leftProduct * rightProduct)
  }
  console.log(result)
}


let example = [1, 2, 3, 4, 5];
noninclusiveProduct(example)
nonincluProduct(example)
