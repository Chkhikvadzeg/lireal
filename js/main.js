const hamburger = document.querySelector('.hamburger');
const asideMenuHamburger = document.querySelector('.aside-menu-hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    asideMenuHamburger.classList.add("active");
    menu.classList.toggle("active");
})

asideMenuHamburger.addEventListener("click", ()  => {
    asideMenuHamburger.classList.remove("active");
    menu.classList.remove("active");
    hamburger.classList.remove("active");
})