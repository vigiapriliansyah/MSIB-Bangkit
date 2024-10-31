// const mySet = new Set([1, 2, 3]);

// console.log(mySet);

//save value in set
const set = new Set();

set.add(1);
set.add("Apple");
set.add(2);
set.add("Banana");

console.log(set);

// for (const number of set) {
//   console.log(number);
// }
set.forEach((value) => console.log(value));

//delete value in set
set.delete(1);

console.log(set);
