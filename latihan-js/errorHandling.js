// const price = 100;
// const paid = 80;
//
// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

//catching error
try {
  console.log("Memulai program");
  throw new Error("Error: program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena tidak ada error, blok ini akan diabaikan");
}

//finally
try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
