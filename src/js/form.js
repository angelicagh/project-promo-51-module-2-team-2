"use strict";

console.log("form funciona");
let inputSelectAll = document.querySelectorAll(".js_input");
const checkboxElements = document.querySelector(".js-checkbox-element");
const cardElements = document.querySelector(".js-card-elements");
const inputLevel = document.querySelector(".js-input-level ");
const cardLevel = document.querySelector(".js-card-level");
const selectBg = document.querySelectorAll(".js_background-img");
const card = document.querySelector(".js-card");

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

initInputs();

// input número

function handleClickLevel(event) {
  event.preventDefault();
  let level = parseInt(inputLevel.value);
  if (level > 100 || level < 1) {
    //alert("Por favor, ingresa un número entre 1 y 100");//sale un mensaje de alerta para que añada un numero valido y no se escribe en la tarjeta
    inputLevel.value = ""; //tras el mensaje de alerta el campo del nivel se vuelve a quedar en blanco
    inputLevel.placeholder = "Tiene que ser menos de 100";
  } else {
    cardLevel.innerHTML = level;
  }
}

// checkbox los 4 elementos
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
});

// imagen fondo ponerla bonita:::

function handleSelectBg(ev) {
  let background = ev.target;
  let inputBgId = `input-${background.id}`;
  let cardBgClass = `card-${background.id}`;
  let inputBg = document.getElementById(inputBgId);
  //console.log(background);
  if (inputBg.checked === false) {
    selectBg.forEach((bg) => {
      bg.classList.remove("form-background__img--selected");
    });
    card.classList.remove("card-bg-1");
    card.classList.remove("card-bg-2");
    card.classList.remove("card-bg-3");
    card.classList.remove("card-bg-4");

    inputBg.checked;
    background.classList.add("form-background__img--selected");
    card.classList.add(cardBgClass);
  } else if (inputBg.checked === false) {
    background.classList.remove("form-background__img--selected");
  }
}

function initSelectBg() {
  selectBg.forEach((bg) => {
    bg.addEventListener("click", handleSelectBg);
  });
}

initSelectBg();

// EVENTOS
inputLevel.addEventListener("input", handleClickLevel);

const resetButton = document.querySelector(".js-reset-btn");

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

resetButton.addEventListener("click", resetCard);


const data = 
     {
    "field1": parseInt(level.innerHTML),
    "field2": name.innerHTML,
    "field3": family.innerHTML,
    "field4": description.innerHTML,
    "field5": skill.innerHTML,
    "field6": origin.innerHTML,
    "field7": weapon.innerHTML,
    "photo": image.style.backgroundImage,
    };

const buttonCreateCard = document.querySelector(".js-create-button");
const linkCreatedCard = document.querySelector(".js-share-text");

const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    console.log(data);
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"},
        body: JSON.stringify(data),
})

    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        linkCreatedCard.href = `https://adalab.es/ejercicios-de-adalab/${data.id}`;
        linkCreatedCard.classList.remove("hidden");
    })
    .catch((error) => {
        console.error("Error:", error);
    }   );
};  

buttonCreateCard.addEventListener("click", handleClickCreateCard);