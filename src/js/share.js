'use strict';

console.log("share funciona");

// CONEXIÓN API

data.field1 = parseInt(level.innerHTML);
data.field2 = name.innerHTML;
data.field3 = family.innerHTML;
data.field4 = description.innerHTML;
data.field5 = skill.innerHTML;
data.field6 = origin.innerHTML;
data.field7 = weapon.innerHTML;


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
        linkCreatedCard.href = `./share.html?infoID=${data.infoID}`;
        linkCreatedCard.classList.remove("hidden");
    })
    .catch((error) => {
        console.error("Error:", error);
    }   );
};  

buttonCreateCard.addEventListener("click", handleClickCreateCard);

// 1. Capturamos los parámetros de la URL
const urlParm = new URLSearchParams(window.location.search);
``
// 2. Obtenemos el valor del parámetro "id"
const id = urlParm.get("id"); // este será el uuid de mi url

console.log(id);




console.log("de nuevo" + data);

