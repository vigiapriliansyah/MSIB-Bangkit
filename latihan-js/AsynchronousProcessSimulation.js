console.log("saya memesan kopi di kafe");

function makeCoffer() {
  const estimationTIme = 5000;

  const inSecond = Math.ceil(estimationTIme / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan Kopi dalam ${inSecond} detik`,
  );

  setTimeout(() => {
    console.log("Pramusaji selesai membuat kopi.");
  }, estimationTIme);
}

makeCoffer();
