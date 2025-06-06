'use strict';
console.log("avatar funciona");
const fr = new FileReader();
const fileField = document.querySelector('.js-profile-upload-btn');
const profileImage = document.querySelector('.js-profile-image');


function getImage(ev) {
    const myFile = ev.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}

function writeImage() {
    profileImage.style.backgroundImage = `url(${fr.result})`;
    data.photo = fr.result; 
}

if (fileField){
    fileField.addEventListener('change', getImage);
};
