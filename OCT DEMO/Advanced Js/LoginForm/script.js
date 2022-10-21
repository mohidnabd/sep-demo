let headName = document.querySelector(".form-header")
let registerLink = document.getElementById("register-link")
let loginBtn = document.getElementById("login-btn");
let registerBtn= document.getElementById("reg-btn");
let loginLink = document.getElementById("login-link")
let ifSuccess = document.getElementById("login-success")
let ifFail = document.getElementById("login-fail")
let enterUser = document.getElementById("alertone")
let enterPass = document.getElementById("alerttwo")


registerLink.addEventListener("click", toRegisterForm)

function toRegisterForm(){
    headName.innerHTML="REGISTER FORM";
    loginBtn.style.display="none";
    registerBtn.style.display= "block";
    registerLink.style.display="none";
    loginLink.style.display="block";
}

loginLink.addEventListener("click", toLoginForm)

function toLoginForm(){
    headName.innerHTML="LOGIN FORM"
    loginBtn.style.display="block"
    registerBtn.style.display= "none"
    registerLink.style.display="block"
    loginLink.style.display="none"
}

let unameInput = document.getElementById("userName");
let passInput = document.getElementById("passWord");

let storedName = "Mohideen96";
let storedPass = 123456789

function login(event){
    event.preventDefault();
    var uname = unameInput.value;
    var pass = passInput.value;
    console.log("Username : " ,uname)
    console.log("Password : " ,pass)
    if(uname=="Mohideen96"&&pass==123456789)
    {
        ifSuccess.style.display = "block"
        ifFail.style.display = "none"
    }else {
        ifSuccess.style.display = "none"
        ifFail.style.display = "block"
    }
    if(uname.length==0){
        enterUser.style.display = "block"
    
    }if(pass.length==0){
    
        enterPass.style.display = "block"
    }if(uname.length>0){
        enterUser.style.display = "none"
    }if(pass.length>0){
        enterPass.style.display = "none"
    }
}
loginBtn.addEventListener("click",login)

function onInputUserName(){
    if(unameInput.value.length<8)
    {
        unameInput.style.backgroundColor= "orangered"
        unameInput.style.color= "white";
    }else if(unameInput.value.length>=8)
    {
        unameInput.style.backgroundColor = "green"
        unameInput.style.color = "black"
    }
}

function onInputPassWord(){
    if(passInput.value.length>=8 && passInput.value.length<=15)
    {
        passInput.style.backgroundColor= "green"
        passInput.style.color= "white";
    }else{
        passInput.style.backgroundColor="red"
        passInput.style.color = "white"
    }
    
}

