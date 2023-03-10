var button = document.getElementById("submition")
button.addEventListener("click",() => {
    var check = false;
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var comfirmPass = document.getElementById("compassword").value;
    var invalid = ["!","@","#","$","%","^","&","*","(",")"];
    if (comfirmPass == password){
        if(email.include("@")){
            check = true
        } else {
            check = false ;
        }
    }
    
    console.log(check);
    console.log(user);
    console.log(email);
    console.log(password);
} )


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