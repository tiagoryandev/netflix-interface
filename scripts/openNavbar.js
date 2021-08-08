const buttonNavbar = document.getElementById("button-opennavbar");
const header = document.querySelector("header");
const main = document.querySelector("main");

let tierButton = false;

buttonNavbar.addEventListener("click", () => {
    if (!tierButton) {
        header.style.left = "0";
        main.style.left = "250px";
        main.style.width = "calc(100vw - 250px)";
        tierButton = true;
    } else {
        header.style.left = "-250px";
        main.style.left = "0px";
        main.style.width = "100vw";
        tierButton = false;
    };
});