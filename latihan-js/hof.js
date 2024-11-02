// function apply(operation, ...args) {
//   return operation(...args);
// }
//
// function sum(a, b, c) {
//   return a + b + c;
// }
//
// function discount(disc, value) {
//   return value - (disc / 100) * value;
// }
//
// const productPrice = apply(sum, 100, 100, 200);
// const withDiscount = apply(discount, 25, productPrice);
//
// console.log("Product Price: ", productPrice);
// console.log("With discount 25%: ", withDiscount);

//memouze
// function memoize(fn) {
//   const cache = new Map();
//
//   return function (...args) {
//     const key = JSON.stringify(args);
//
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn(...args);
//     cache.set(key, result);
//
//     return result;
//   };
// }
//
// function sumArray(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }
//
// const memoizedSumArray = memoize(sumArray);
// const largeArray = Array.from({ length: 500 }, (_, i) => i + 1);
//
// console.time("Memoize Sum First Call");
// console.log("Total: ", memoizedSumArray(largeArray));
// console.timeEnd("Memoize Sum First Call");
//
// console.time("Memoized Sum Second Call (Cached)");
// console.log("Total:", memoizedSumArray(largeArray));
// console.timeEnd("Memoized Sum Second Call (Cached)");
//

//currying pada fungsi adjectivfy dan multipleBy
function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy("keren");
const funnifier = adjectivfy("seru");

const multipleByFive = multipleBy(5);

console.log(coolifier("Vigi"));
console.log(funnifier("Javascript"));
console.log(multipleByFive(7));
console.log(multipleByFive(10));
