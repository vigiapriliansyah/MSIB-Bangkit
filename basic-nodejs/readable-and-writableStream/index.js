const fs = require("fs");

const readableStream = fs.createReadStream(
  "./readable-and-writableStream/input.txt",
  {
    highWaterMark: 10,
  },
);

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

const writableStream = fs.createWriteStream(
  "./readable-and-writableStream/output.txt",
);

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");
