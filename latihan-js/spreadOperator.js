const obj1 = { name: "Vigi" };
const obj2 = { lastName: "Apriliansyah", address: "JL. jalan ditudie" };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);
