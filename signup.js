let email = document.getElementById("inputEmail");
let mailerror = document.getElementById("errormail");
let num = document.getElementById("inputNumber");
let phoneerror = document.getElementById("errorphone");
let pass1 = document.getElementById("inputPassword");
let pass2 = document.getElementById("inputPassword2")
let passerror = document.getElementById("errorpass")
let error = document.getElementById("error");
let strenght = document.getElementById("strenght");
var phoneb = false;
var mailb = false;
var pass1b = false;
var pass2b = false;
var str = ["Bad", "Meh..", "Good"]
var color = ["Red", "Yellow", "Green"];

function phonevalid() {
    let phoneexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneexp.test(num.value)) {
        phoneerror.innerHTML = "Number OK";
        phoneerror.style.color = "green";
        phoneb = true;
        return true;
    } else {
        phoneerror.innerHTML = "Invalid Number";
        phoneerror.style.color = "red";
        phoneb = false
        return false;
    }
}

function passstrenght() {
    var passstrenght = 0;
    let passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/
        // morethan8 1
    let str1 = /^(?=.{8,})$/
        //lowercase&upercase 2
    let str2 = /^(?=.*[a-z])(?=.*[A-Z])$/
        // Numeric_Char 3
    let str3 = /^(?=.*[0-9])(?=.*[0-9])$/
        // spclchar 4
    let str4 = /^(?=.*[!@#$%^&*])$/
    if (str4.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (str3.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (str2.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (passexp.test(pass1.value)) {
        passstrenght = 2;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else {
        pass1b = false;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return false;
    }
}

function checkpass() {
    if (pass1.value == pass2.value) {
        pass2.style.color = "green";
        passerror.innerHTML = "passwords match";
        passerror.style.color = "green";
        pass2b = true;
        return true;
    } else {
        pass2.style.color = "red";
        passerror.innerHTML = "passwords doesn't match";
        passerror.style.color = "red";
        pas2b = false;
        return true;
    }
}

function mailvalid() {
    let emailexp = /^([\w\.-]+)@([\w\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (emailexp.test(email.value)) {
        mailerror.innerHTML = "Mail OK"
        mailerror.style.color = "green";
        mailb = true;
        return true;
    } else {
        mailerror.innerHTML = "Invalid Mail";
        mailerror.style.color = "red";
        mailb = false;
        return false;
    }

}

function signupvalid() {
    if (phoneb && mailb) {
        if (pass1b && pass2b) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}