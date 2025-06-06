"use strict";

// CONSTANTES Y VARIABLES 

// constantes en el form:
let inputSelectAll = document.querySelectorAll(".js_input");
const checkboxElements = document.querySelector(".js-checkbox-element");
const resetButton = document.querySelector(".js-reset-btn");
const inputLevel = document.querySelector(".js-input-level ");
const selectBg = document.querySelectorAll(".js_background-img");
 


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
if (checkboxElements){
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
}

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
if (inputLevel){
  inputLevel.addEventListener("input", handleClickLevel);}
if (resetButton){
resetButton.addEventListener("click", resetCard);}




