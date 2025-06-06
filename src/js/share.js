'use strict';

// CONSTANTES
// recogemos los parámetros de la url (lo que ponga en el navegador)
const urlParm = new URLSearchParams(window.location.search);
// cogerá lo de infoID que pone en la url:
const infoID = urlParm.get("infoID"); // este será el uuid de mi url



if (infoID) {
// traer los datos que habíamos enviado a la API en pre-share
    fetch(`https://dev.adalab.es/api/info/${infoID}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log("field9: ");
            level.innerHTML = data.data.field1;
            name.innerHTML = data.data.field2;
            family.innerHTML = data.data.field3;
            description.innerHTML = data.data.field4;
            skill.innerHTML = data.data.field5;
            origin.innerHTML = data.data.field6;
            weapon.innerHTML = data.data.field7;
            image.style.backgroundImage = `url('${data.data.photo}')`;
            if (data.data.field8 !==""){
            card.classList.add(data.data.field8);
            }

    // añadir las que faltan
    })
    .catch((error) => {
        console.error("Error al obtener los datos:", error);
    });
}

 
