let user = localStorage.getItem("user");
let email = localStorage.getItem("email")
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

document.querySelector(".email-user").innerHTML += `Username: ${user} | Email: ${email} `

let btndelete = document.getElementsByClassName("delete_account")
btndelete.addEventListener("click", function(){
  // // let check = comfirm("Are You Sure to delete the account ?")
  // const response = confirm("Are you sure you want to do that?");

console.log("hello");
})