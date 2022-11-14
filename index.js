var navBar = document.querySelector("nav");
var openMenu = document.getElementById("menu-button");
var closeMenu = document.getElementById("menu-close");

openMenu.addEventListener("click", () => {
    navBar.classList.add("open");
});
closeMenu.addEventListener("click", () => {
    navBar.classList.remove("open");
});