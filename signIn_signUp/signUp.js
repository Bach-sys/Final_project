var button = document.getElementById("submition")
button.addEventListener("click",
function collectData (){
    var check = false;
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var invalid = ["!","@","#","$","%","^","&","*","(",")"];
    for(let i = 0 ; i < invalid.length; i++){
        if (user.include(invalid[i])){
            if (email.include("@")){
                
        }else {
                check = false
        }
        }
        check = true ;
    }
    
    
        
    
    console.log(user);
    console.log(email);
    console.log(password);
}
)