var button = document.getElementById("submition");
button.addEventListener("click", (e) => {
  e.preventDefault();
  var check = false;
  var user = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var comfirmPass = document.getElementById("compassword").value;
  var invalid = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var emailvalid = ["@"];

  if (
    email != "" &&
    password != "" &&
    user != "" &&
    comfirmPass != "" &&
    password == comfirmPass
  ) {
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    localStorage.setItem("email",email)
    location.href = "/home/index.html";

    // if (email.indexOf("@")) {
    //   for (let i = 0; i <= invalid.length; i++) {
    //     if (user.indexOf(i)) {
    //       console.log("invalid user");
    //     } else {
    //       location.href = "/home/index.html";
    //     }
    //   }
    // } else {
    //   console.log("invalid user");
    // }
  }

  //   if (comfirmPass == password) {
  //     if (email.includes(emailvalid[0])) {
  //       check = true;
  //     } else {
  //       document.getElementById("alert").innerHTML += "Check your email";
  //     }
  //   } else {
  //     check = false;
  //    }

  console.log(check);
  console.log(user);
  console.log(email);
  console.log(password);
});

// function collectData (){
//     var check = false;
//     var user = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var comfirmPass = document.getElementById("compassword").value;
//     var invalid = ["!","@","#","$","%","^","&","*","(",")"];
//     console.log(user);
//     console.log(email);
//     console.log(password);
// }
