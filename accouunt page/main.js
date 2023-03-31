let imgData = localStorage.getItem("imgData");

let user = localStorage.getItem("user");
let email = localStorage.getItem("email");
console.log();
document.getElementById("accountUser").innerHTML += user;
document.getElementById("accountemail").innerHTML += email;
let imgrender = document.getElementById("imgrender");
imgrender.scr = imgData;
let fileadd = document.getElementById("addimg");

if (localStorage.getItem("imgData")) {
  fileadd.addEventListener("change", function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        imgrender.src = reader.result;
        localStorage.setItem("imgData", reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  });
} else {
}
