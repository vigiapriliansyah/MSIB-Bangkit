const user = {
  name: "vigi",
  "last name": "apriliansyah",
  age: 20,
};

console.log(user.name);
console.log(user["last name"]);
console.log(user.age);

//const { name, age } = user;

//console.log(name, age);

const { name, lastName, isMale = false } = user;
console.log(isMale);

user.age = 21;

console.log(user.age);
