let nav = document.querySelector("nav");
let tlacitko = document.querySelector(".kuk");

tlacitko.addEventListener("click", function() {
  nav.classList.toggle('nav--active');
});