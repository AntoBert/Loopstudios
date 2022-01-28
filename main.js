const menuBtn = document.querySelector(".menu-icon");
const navLeft = document.querySelector(".nav-left");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelector(".nav-items");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        navLeft.classList.add("open");
        container.classList.add("open");
        navbar.classList.add("open");
        navItems.classList.add("open");
        menuOpen = true; 
    } else {
        menuBtn.classList.remove("open");
        navLeft.classList.remove("open");
        container.classList.remove("open");
        navbar.classList.remove("open");
        navItems.classList.remove("open");
        menuOpen = false;
    }
});