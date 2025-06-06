'use strict';

// CONSTANTES Y VARIABLES
const buttonCreateCard = document.querySelector(".js-create-button");
const linkCreatedCard = document.querySelector(".js-share-text");




// conectamos con la API
const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    // reescribir los datos en data (lo meto dentro porque sino leía los datos iniciales de Eowyn y así los reescribe cuando esté terminada la carta)
    data.field1 = parseInt(level.innerHTML);
    data.field2 = name.innerHTML;
    data.field3 = family.innerHTML;
    data.field4 = description.innerHTML;
    data.field5 = skill.innerHTML;
    data.field6 = origin.innerHTML;
    data.field7 = weapon.innerHTML;

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
        linkCreatedCard.href = `https://angelicagh.github.io/project-promo-51-module-2-team-2/share.html?infoID=${data.infoID}`;
        linkCreatedCard.classList.remove("hidden");
    })
    .catch((error) => {
        console.error("Error:", error);
    }   );

};  

buttonCreateCard.addEventListener("click", handleClickCreateCard);






