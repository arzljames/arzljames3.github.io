const navLinks = document.querySelector(".nav-links");
const burgerMenu = document.querySelector(".burger-menu");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const secondary = document.querySelector(".second-nav");
const section = document.querySelector(".section");

burgerMenu.addEventListener("click", () => {
  secondary.classList.toggle("nav-active");
  section.classList.toggle("section-active");
  first.classList.toggle("first-active");
  second.classList.toggle("second-active");
  third.classList.toggle("third-active");
  burgerMenu.classList.toggle("active-burger");
});
