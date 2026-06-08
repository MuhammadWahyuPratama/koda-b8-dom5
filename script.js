const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const eyeButton1 = document.querySelector(".eye-btn");
const eyeButton2 = document.querySelector(".eye-btn2");
const img1 = document.querySelector(".eye-btn img");
const img2 = document.querySelector(".eye-btn2 img");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

eyeButton1.addEventListener("click", () => {

    if(password.type === "password"){

        password.setAttribute("type", "text");
        img1.setAttribute("src", "asset/eye-closed-thin.svg");

    }else{

        password.setAttribute("type", "password");
        img1.setAttribute("src", "asset/eye.svg");

    }

});

eyeButton2.addEventListener("click", () => {

    if(confirmPassword.type === "password"){

        confirmPassword.setAttribute("type", "text");
        img2.setAttribute("src", "asset/eye-closed-thin.svg");

    }else{

        confirmPassword.setAttribute("type", "password");
        img2.setAttribute("src", "asset/eye.svg");

    }

});

hamburger.addEventListener("click", () => {
    console.log("hamburger diklik");
    navLinks.classList.toggle("show");
});