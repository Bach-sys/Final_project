let user = localStorage.getItem("user");
let password = localStorage.getItem("password");
console.log(user);
console.log(password);

if (user == null) {
  document.getElementsByClassName("button-35")[0].style.display = "block";
  document.getElementsByClassName("button-35")[1].style.display = "block";
} else {
  document.getElementsByClassName("button-35")[0].style.display = "none";
  document.getElementsByClassName("button-35")[1].style.display = "none";
}
