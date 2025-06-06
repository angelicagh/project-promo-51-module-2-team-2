
'use strict';
// creamos data en main que lo vamos a estar llamando desde distintos archivos js y reescribiendo:
const data = 
     {
    "field1": 0,
    "field2": "",
    "field3": "",
    "field4": "",
    "field5": "",
    "field6": "",
    "field7": "",
    "field8": "",
    "field9": "",
    "photo": "",
    };

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

// llamamos a todos los demás archivos js::::

import "./get-avatar.js";
import "./form.js"; 
import "./pre-share.js";
import "./accordion.js";
import "./share.js";
