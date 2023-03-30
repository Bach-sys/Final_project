var n = 0;

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
  if (localStorage.getItem("user") == user) {
    if (
      confirm(
        "Bạn có chắc chắn muốn thay đổi thông tin tài khoản này dù bạn đã đăng kí ?"
      )
    ) {
      if (
        email != "" &&
        password != "" &&
        user != "" &&
        comfirmPass != "" &&
        password == comfirmPass
      ) {
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        location.href = "/home/index.html";
      } else {
        alert("hãy điền đầy đủ thông tin");
      }
    } else {
      location.href = "SignIn.html";
    }
  } else {
    if (
      email != "" &&
      password != "" &&
      user != "" &&
      comfirmPass != "" 
    ) {
      if(
        password == comfirmPass
        ){
          let isemail = email.includes("@")
          if(
            email.length > 8 && isemail == true
          ){
            if(
              user.length > 8 
            ){
              localStorage.setItem("user", user);
            localStorage.setItem("password", password);
            localStorage.setItem("email", email);
            location.href = "/home/index.html";
            console.log(n);
            }
            else {
              alert("username quá ngắn ")
            }
          }
          else {
            alert("email kko tồn tại")
          }
        }
        else {
          alert("mật khẩu và xác nhận mật khẩu khôgn khớp")
        }
    } else {
      alert("hãy điền đầy đủ thông tin");
    }
  }
});
