'use strict';

console.log("ready")

/* 1. DECLARAR CONSTANTES
    - JS-CARD-WEAPON
    - JS-INPUT-WEAPON 

2. FUNCION: AL SELECCIONAR UN ARMA, IDENTIFICA CUÁL SELECCIONA Y LUEGO SE PINTA EN LA TARJETA

3. LLAMAR FUNCION 

4. EVENTO DE INPUT: CONFORME SELECCIONAS SE VA MODIFICANDO LA CARTA */

const cardWeapon = document.querySelector(".js-card-weapon");
const inputWeapon = document.querySelector(".js-input-weapon");



function handleClickWeapon(event) {
    event.preventDefault();
    let weapon = event.target.value;
    console.log(weapon);




}

inputWeapon.addEventListener("click", handleClickWeapon);