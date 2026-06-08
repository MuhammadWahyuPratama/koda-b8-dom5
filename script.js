const password = document.getElementById("password");
const button = document.querySelector("button");
const img = document.querySelector(".pass img");

button.addEventListener("click", () => {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        img.setAttribute("src", "asset/eye-closed-thin.svg");
    } else {
        password.setAttribute("type", "password");
        img.setAttribute("src", "asset/eye.svg");
    }
});