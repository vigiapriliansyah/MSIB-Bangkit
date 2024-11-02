// function max(arrayOfNumber) {
//   // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
//   return [...arrayOfNumber].sort((a, b) => a - b).pop();
// }
//
// function registerEmail(person, email) {
//   // menggunakan spread operator untuk menduplikasi nilai person
//   return { ...person, email };
// }
//
// const numbers = [10, 23, 24, 7, 42, 18];
// const largest = max(numbers);
//
// console.log(largest); // Output: 42
// console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]
//
// const person = {
//   name: "John",
//   username: "johndoe",
// };
//
// const personWithEmail = registerEmail(person, "john@dicoding.com");
//
// console.log(person); // Output: { name: 'John', username: 'johndoe' }
// console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
// //filter
// const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
//   Boolean(item),
// );
//
// console.log(truthyArray);
// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];
// const eligibleForScholarshipStudents = students.filter(
//   (students) => students.score > 85,
// );
//
// console.log(eligibleForScholarshipStudents);

//immutable object
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";
complexUser.preferences.notifications = "month";
console.log(complexUser.preferences.address.city); // Output: 'New York'
console.log(complexUser.preferences.notifications);
