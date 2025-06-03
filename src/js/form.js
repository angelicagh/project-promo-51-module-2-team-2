'use strict';

console.log("form funciona");
let inputSelectAll = document.querySelectorAll(".js_input");
const checkboxElements = document.querySelector(".js-checkbox-element");
const cardElements = document.querySelector(".js-card-elements");
const inputLevel = document.querySelector(".js-input-level ");
const cardLevel = document.querySelector(".js-card-level");
const selectBg = document.querySelectorAll(".js_background-img");
const card = document.querySelector(".js-card");
//CÓDIGO INICIAL::: 
//const cardWeapon = document.querySelector(".js-card-weapon");
//const inputWeapon = document.querySelector(".js-input-weapon");
//const cardOrigin = document.querySelector(".js-card-origin");
//const inputOrigin = document.querySelector(".js-input-origin");


/* function handleClickWeapon(event) {
    event.preventDefault();
    let weapon = event.target.value;
    cardWeapon.innerHTML = weapon;
};

function handleClickOrigin(event) {
    event.preventDefault();
    let origin = event.target.value;
    cardOrigin.innerHTML = origin;
};

inputWeapon.addEventListener("change", handleClickWeapon); // select va con change como input va con input 
inputOrigin.addEventListener("change", handleClickOrigin);

  */

// fUNCIÓN RESUMIDA CON IFS::::::
/* function handleInput(event) {
    event.preventDefault();
    let item = event.target.value;
    let input = event.currentTarget.id;
    console.log(input);
  if (input === "name"){
            cardName.innerHTML = item;
    } else if (input === "family"){
            cardFamily.innerHTML = item;
    } else if (input === "level"){
            cardLevel.innerHTML = item;
    } else if (input === "description"){
            cardDescription.innerHTML = item;
    } else if ( input === "skill"){
            cardSkill.innerHTML = item;
    } else if (input === "origin"){
            cardOrigin.innerHTML = item;
    } else if (input === "weapon"){
            cardWeapon.innerHTML = item;
    } 
}; */


// FUNCIÓN MEGA RESUMIDA::::
function handleInput(ev) {
    let item = ev.target.value;
    let input = ev.currentTarget.id;
    let cardElClass = `.js-card-${input}`;
    let cardEl = document.querySelector(cardElClass);
    cardEl.innerHTML = item;
};


function initInputs() {
    inputSelectAll.forEach((inputSelect) => {
        inputSelect.addEventListener("input", handleInput);
    });
};

initInputs();

// input número

function handleClickLevel (event) {
    event.preventDefault();
    let level = parseInt(inputLevel.value);
    if (level > 100 || level < 1) {
        //alert("Por favor, ingresa un número entre 1 y 100");//sale un mensaje de alerta para que añada un numero valido y no se escribe en la tarjeta
        inputLevel.value = "";//tras el mensaje de alerta el campo del nivel se vuelve a quedar en blanco
        inputLevel.placeholder = "Tiene que ser menos de 100";
    } else {
        cardLevel.innerHTML = level;
    }  
};



// checkbox los 4 elementos
checkboxElements.addEventListener ("change", (ev) => {
    let element = ev.target;
    let elValue = element.value;
    let elClass = `.js-element-${elValue}`;
    let elementByClass = document.querySelector(elClass);
    if (element.checked === true){
        elementByClass.classList.remove("hidden");
    } else {
    elementByClass.classList.add("hidden");
    }

});

// imagen fondo ponerla bonita:::

function handleSelectBg(ev){
    let background = ev.target;
    let inputBgId = `input-${background.id}`;
    let cardBgClass = `card-${background.id}`;
    let inputBg = document.getElementById(inputBgId);
    //console.log(background); 
    if (inputBg.checked === false){
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
    } else if (inputBg.checked === false){
        background.classList.remove("form-background__img--selected");
    
    } 
};


function initSelectBg() {
    selectBg.forEach((bg) => {
        bg.addEventListener("click", handleSelectBg);
    });
};

initSelectBg();

// EVENTOS
inputLevel.addEventListener("input", handleClickLevel);

