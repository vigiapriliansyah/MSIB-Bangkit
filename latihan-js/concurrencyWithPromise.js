// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error("Ups!")), 2000),
// );
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
//
// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("Success");
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log("Failed");
//     console.log(error.message);
//   });

//promise.allsettled

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("Success");
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log("failed");
//     console.log(error.message);
//   });

//test
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("error");
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
