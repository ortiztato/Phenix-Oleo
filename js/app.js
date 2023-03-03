//script to open and close de nav menu

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contactbtn = document.querySelector("#contactbtn");
const serviciosbtn = document.querySelector("#serviciosbtn");
const productosbtn = document.querySelector("#productosbtn");
const nosotrosbtn = document.querySelector("#nosotrosbtn");
const logomenubtn = document.querySelector("#logomenubtn");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
serviciosbtn.addEventListener("click", toggleMenu);
productosbtn.addEventListener("click", toggleMenu);
nosotrosbtn.addEventListener("click", toggleMenu);
logomenubtn.addEventListener("click", toggleMenu);
