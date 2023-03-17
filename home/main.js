let deletebtn = document.getElementById("delete")
let user = localStorage.getItem("user");
let email = localStorage.getItem("email")
let password = localStorage.getItem("password");
let hTitle = document.querySelector(".email-user")
console.log(user);
console.log(password);

function checkValue (){
if (localStorage.getItem("user") == null) {
  deletebtn.style.display = "none";
  hTitle.style.display = "none";
  document.getElementsByClassName("button-35")[0].style.display = "block";
  document.getElementsByClassName("button-35")[1].style.display = "block";
} else {
  deletebtn.style.display = "block";
  hTitle.style.display = "block";
  document.querySelector(".email-user").innerHTML += `Username: ${user} | Email: ${email} `
  document.getElementsByClassName("button-35")[0].style.display = "none";
  document.getElementsByClassName("button-35")[1].style.display = "none";
}


}
checkValue();

function deleteAccount() {
  if (confirm("Bạn có chắc chắn muốn xóa?")) {
  localStorage.removeItem("user")
  localStorage.removeItem("email")
  localStorage.removeItem("password")
  console.log(user)
  checkValue();
  } 
}
function signIn() {
  location.href = "/signIn_signUp/signUp.html"
}
function signUp() {
  location.href = "/signIn_signUp/signIn.html"
}

