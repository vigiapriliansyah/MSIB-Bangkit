/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const expectedEmail = "admin@dicoding.com";

/** 
 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
 * @constant {string}
 */
const expectedPassword = "superpassword";

/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
    /** 
   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const email = inputEmailElement.value;

   /** 
   * Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const password = inputPasswordElement.value;


    /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
        /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    showPopUp();
  }
});
