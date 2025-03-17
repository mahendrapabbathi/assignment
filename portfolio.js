
let menuBtn = document.querySelector('.menu'); 
let menuIcon = document.querySelector('.menu-icon');
let closeBtn = document.querySelector('.close'); 
let navList = document.querySelector('.navbar ul');

function isMobile() {
    return window.innerWidth <= 800;
}

menuBtn.addEventListener("click", () => {
    menuIcon.classList.add("active"); 
    navList.style.display = "flex"; 
    menuBtn.style.display = "none";  
    closeBtn.style.display = "block"; 
});

closeBtn.addEventListener("click", () => {
    menuIcon.classList.remove("active");  
    navList.style.display = "none";  
    menuBtn.style.display = "block";  
    closeBtn.style.display = "none"; 
});

navList.querySelectorAll("li a").forEach(item => {
    item.addEventListener("click", () => {
        if(isMobile()){
            menuIcon.classList.remove("active");
            navList.style.display = "none";
            menuBtn.style.display = "block";  
            closeBtn.style.display = "none";  
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").addEventListener("blur", validName);
    document.getElementById("phone").addEventListener("blur", validPhoneNo);
    document.getElementById("email").addEventListener("blur", validEmail);
    document.getElementById("message").addEventListener("blur", validMessage);
});

function validName() {
    const name = document.getElementById("name").value;
    const error = document.getElementById("name-error");

    if (name.length === 0) {
        error.innerHTML = "*Name is required";
        return false;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
        error.innerHTML = "Only alphabets are allowed";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validPhoneNo() {
    const phone = document.getElementById("phone").value;
    const error = document.getElementById("phone-error");

    if (phone.length === 0) {
        error.innerHTML = "*Phone number is required";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        error.innerHTML = "Enter valid phone number";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}


function validEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("email-error");

    if (email.length === 0) {
        error.innerHTML = "*Email is required";
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.innerHTML = "Enter valid email address";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validMessage() {
    const message = document.getElementById("message").value;
    const error = document.getElementById("message-error");
    const required=20;
    const left=required-message.length;

    if (left > 0) {
        error.innerHTML = left+" characters are remaining";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validateForm() {
    const nameValid = validName();
    const phoneValid = validPhoneNo();
    const emailValid = validEmail();
    const messageValid = validMessage();

    if (!nameValid || !phoneValid || !emailValid || !messageValid) {
        document.getElementById("submit-error").innerHTML = "Please fix errors before submitting";
        return false; 
    }

    document.getElementById("submit-error").innerHTML = ""; 
    alert("Form submitted successfully!");

    document.getElementById("submit-error").innerHTML = ""; 
    alert("Form submitted successfully!");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("phone-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("message-error").innerHTML = "";

    return true; 
}

function updateDateTime() {
    let now = new Date();
    let formattedDate = now.toLocaleString(); 
    document.getElementById("currentDateTime").textContent = formattedDate;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 
