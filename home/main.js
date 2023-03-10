let user = localStorage.getItem("user");
let password = localStorage.getItem("password");
console.log(user);
console.log(password);
if (user == null) {
  document.getElementById("button").style.display = "block";
} else {
  document.getElementById("button").style.display = "none";
}
