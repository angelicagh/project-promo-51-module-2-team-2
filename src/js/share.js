'use strict';

// CONSTANTES
// recogemos los parámetros de la url (lo que ponga en el navegador)
const urlParm = new URLSearchParams(window.location.search);
// cogerá lo de infoID que pone en la url:
const infoID = urlParm.get("infoID"); // este será el uuid de mi url

// constantes carta: 
// pendiente: podríamos hacer un js solo para variables de carta y llamarlo desde form.js y desde aquí para no repetirnos (si nos da tiempo)
const cardElements = document.querySelector(".js-card-elements");
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


if (infoID) {
// traer los datos que habíamos enviado a la API en pre-share
    fetch(`https://dev.adalab.es/api/info/${infoID}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("Data recibida:", data);
            level.innerHTML = data.data.field1;
            name.innerHTML = data.data.field2;
            family.innerHTML = data.data.field3;
            description.innerHTML = data.data.field4;
            skill.innerHTML = data.data.field5;
            origin.innerHTML = data.data.field6;
            weapon.innerHTML = data.data.field7;
            image.style.backgroundImage = data.data.photo;
    // añadir las que faltan
    })
    .catch((error) => {
        console.error("Error al obtener los datos:", error);
    });
}

 
