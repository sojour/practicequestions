function scheduler(f, n) {
  setTimeout(() => f(...arguments), n)
}

let addTwo = (n) => {
  console.log(n + 2);
  return n + 2;
}


scheduler(addTwo, 3000)


// let throttle = (func, time) => {
//   let pending = false;
//   return function () {
//     if (!pending) {
//       pending = true
//       setTimeout(() => pending = false, time)
//       return func(...arguments)
//     }
//   }
// };

// let a = throttle(addTwo, 3000)

// a(7)
// console.log(a)
