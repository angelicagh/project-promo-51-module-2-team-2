'use strict';

console.log("form funciona");

const cardWeapon = document.querySelector(".js-card-weapon");
const inputWeapon = document.querySelector(".js-input-weapon");
const cardOrigin = document.querySelector(".js-card-origin");
const inputOrigin = document.querySelector(".js-input-origin");
const cardSkill = document.querySelector(".js-card-skill");
const inputSkill = document.querySelector(".js-input-skill");
const cardFamily = document.querySelector(".js-card-family");
const inputFamily = document.querySelector(".js-input-family");


function handleClickWeapon(event) {
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

