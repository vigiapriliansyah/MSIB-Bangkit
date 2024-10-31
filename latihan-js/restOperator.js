// function myFunc(...manyMoreArgs) {
//   console.log(manyMoreArgs.length);
//   console.log("manyMoreArgs", manyMoreArgs);
// }
//
// myFunc("one", "two", "three");

const favorite = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];

const [first, second, ...rest] = favorite;

console.log(first);
console.log(second);
console.log(rest);
