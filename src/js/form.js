"use strict";

// CONSTANTES Y VARIABLES 

// constantes en el form:
let inputSelectAll = document.querySelectorAll(".js_input");
const checkboxElements = document.querySelector(".js-checkbox-element");
const resetButton = document.querySelector(".js-reset-btn");
const inputLevel = document.querySelector(".js-input-level ");
const selectBg = document.querySelectorAll(".js_background-img");
 
// constantes carta: 

let cardElements = document.querySelector(".js-card-elements");
const cardLevel = document.querySelector(".js-card-level");
const card = document.querySelector(".js-card");
let name = document.querySelector(".js-card-name");
let family = document.querySelector(".js-card-family");
let description = document.querySelector(".js-card-description");
let skill = document.querySelector(".js-card-skill");
let origin = document.querySelector(".js-card-origin");
let weapon = document.querySelector(".js-card-weapon");
let level = document.querySelector(".js-card-level");
let image = document.querySelector(".js-profile-image");
let elementagua = document.querySelector(".js-element-agua");
let elementfuego = document.querySelector(".js-element-fuego");
let elementviento = document.querySelector(".js-element-viento");
let elementtierra = document.querySelector(".js-element-tierra");


// FUNCIONES

// función para los inputs de texto y selects
function handleInput(ev) {
  let item = ev.target.value;
  let input = ev.currentTarget.id;
  let cardElClass = `.js-card-${input}`;
  let cardEl = document.querySelector(cardElClass);
  cardEl.innerHTML = item;
}

function initInputs() {
  inputSelectAll.forEach((inputSelect) => {
    inputSelect.addEventListener("input", handleInput);
  });
}

// input level (para que no sea mayor de 100)
function handleClickLevel(event) {
  event.preventDefault();
  let level = parseInt(inputLevel.value);
  if (level > 100 || level < 1) {
    inputLevel.value = ""; 
    inputLevel.placeholder = "Tiene que ser menos de 100";
  } else {
    cardLevel.innerHTML = level;
  }
}

// checkbox los 4 elementos (tierra, agua, viento, fuego)
// hecho con función arrow para demostrar que no se nos ha olvidado que también existen (como Teruel) 
checkboxElements.addEventListener("change", (ev) => {
  let element = ev.target;
  let elValue = element.value;
  let elClass = `.js-element-${elValue}`;
  let elementByClass = document.querySelector(elClass);
  if (element.checked === true) {
    elementByClass.classList.remove("hidden");
  } else {
    elementByClass.classList.add("hidden");
  }
  // data.field9 = cardElements;
  console.log(cardElements);
});

// decorar el fondo de la carta
function handleSelectBg(ev) {
  let background = ev.target;
  let inputBgId = `input-${background.id}`;
  let cardBgClass = `card-${background.id}`;
  let inputBg = document.getElementById(inputBgId);
  if (inputBg.checked === false) {
    selectBg.forEach((bg) => {
      bg.classList.remove("form-background__img--selected");
    });
    card.classList.remove("card-bg-1", "card-bg-2", "card-bg-3", "card-bg-4");
    inputBg.checked;
    background.classList.add("form-background__img--selected");
    card.classList.add(cardBgClass);
    data.field8 = cardBgClass;
  } else if (inputBg.checked === false) {
    background.classList.remove("form-background__img--selected");
  }
}

function initSelectBg() {
  selectBg.forEach((bg) => {
    bg.addEventListener("click", handleSelectBg);
  });
}

// función para resetear la carta
function resetCard() {
  level.innerHTML = "58";
  name.innerHTML = "Éowyn, lady of Rohan";
  family.innerHTML = "Humana";
  description.innerHTML =
    "Éowyn es un personaje de la novela fantástica El Señor de los Anillos, de J. R. R. Tolkien. Es una noble de Rohan.";
  skill.innerHTML = "Rugido de núcleo";
  origin.innerHTML = "Terragónida";
  weapon.innerHTML = "Talismán";
  image.style.backgroundImage = "url('./images/eowyn.jpg')";
  elementagua.classList.add("hidden");
  elementfuego.classList.add("hidden");
  elementviento.classList.add("hidden");
  elementtierra.classList.add("hidden");
}


// EVENTOS Y LLAMADAS A FUNCIONES
initInputs();
initSelectBg();
inputLevel.addEventListener("input", handleClickLevel);
resetButton.addEventListener("click", resetCard);




