export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    "Mohon Menunggu. Pramusaji sedang membuatkan Kopi dalam ",
    inSecond,
    "detik",
  );

  setTimeout(() => {
    console.log("Pramusaji selesai membuat kopi.");

    callback();
  }, estimationTime);
}

export function sendCoffee(callback) {
  const estimationTime = 2000;

  console.log("Pramusaji sedang mengantarkan kopi pesanan");

  setTimeout(() => {
    console.log("Pramusaji sudah sampai ke meja.");
    callback();
  }, estimationTime);
}
