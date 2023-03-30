let user = localStorage.getItem("user");
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
let hTitle = document.querySelector(".email-user");
console.log(user);
console.log(password);

function checkValue() {
  if (localStorage.getItem("user") == null) {
    hTitle.style.display = "none";
    document.getElementsByClassName("button-35")[0].style.display = "block";
    document.getElementsByClassName("button-35")[1].style.display = "block";
  } else {
    hTitle.style.display = "block";
    document.getElementsByClassName("button-35")[0].style.display = "none";
    document.getElementsByClassName("button-35")[1].style.display = "none";
  }
}
checkValue();

function deleteAccount() {
  if (confirm("Bạn có chắc chắn muốn xóa?")) {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    console.log(user);
    checkValue();
  }
}
function signIn() {
  location.href = "/signIn_signUp/signUp.html";
}
function signUp() {
  location.href = "/signIn_signUp/signIn.html";
}
let btnaccount = document.getElementById("account")
 btnaccount.addEventListener("click",function(){
  location.href = "/accouunt page/index.html"
 })