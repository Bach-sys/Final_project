document.getElementById("hellobtn").style.display = "none"
let btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click",
function(e){
    e.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if (localStorage.getItem("user")){
      if ( username == localStorage.getItem("user") && password == localStorage.getItem("password")){
        location.href = "/home/index.html"
      } else {
        alert("Bạn nhập sai mật khẩu hoặc tên đăng nhập")
      }
    } else {
      alert("bạn chưa có tài khoản hãy đăng nhập")
      document.getElementById("hellobtn").style.display = "block"
    }
    
})

function navigate() {
  location.href = "signUp.html"
}