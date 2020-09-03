const navLinks = document.querySelector(".nav-links");
const burgerMenu = document.querySelector(".burger-menu");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const secondary = document.querySelector(".second-nav");
const nav = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
  secondary.classList.toggle("nav-active");
  first.classList.toggle("first-active");
  second.classList.toggle("second-active");
  third.classList.toggle("third-active");
  burgerMenu.classList.toggle("active-burger");
});

function navChange() {
  if (this.scrollY > this.innerHeight) {
    nav.classList.add("navbar-active");
    secondary.classList.add("second-nav-active");
  } else {
    nav.classList.remove("navbar-active");
    secondary.classList.remove("second-nav-active");
  }
}

window.addEventListener("scroll", navChange);
