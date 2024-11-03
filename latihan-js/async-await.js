function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve("You did it!");
  }, 2000);
}

function doSomething() {
  return new Promise(promiseExecutor);
}

async function promiseWithAsyncAwait() {
  try {
    console.log("start");

    const result = await doSomething();
    console.log(result);

    console.log("end");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();
