let email = document.getElementById("inputEmail");
let pass = document.getElementById("inputPassword");
let error = document.getElementById("error");


function loginvalid() {
    let emailexp = /^([\w\.-]+)@([\w\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
    if (emailexp.test(email.value)) {
        if (passexp.test(pass.value)) {
            return true
        } else {
            error.innerHTML = "Invalid Credentials.Try Again"
            error.style.color = "red";
            return false;
        }
    } else {
        error.innerHTML = "Invalid Credentials.Try Again"
        error.style.color = "red";
        return false;
    }

}