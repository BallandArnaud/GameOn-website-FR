function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const formFirst = document.getElementById('first'); // Get firstname input
const formLast = document.getElementById('last'); // Get lastname input
const formEmail = document.getElementById('email'); // Get email input
const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
const formLocation = document.querySelector('input[name="location"]'); // Get location input radio
let formLocationCheck = document.querySelector('input[name="location"]:checked'); // Get location of next tournament input radio check
const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let formIsValid; // initialize form validation;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Ajoute un message d'erreur
function addFormErrorMessage(element, errorMessage){
  element.parentElement.setAttribute('data-error', errorMessage);
  element.parentElement.setAttribute('data-error-visible', 'true');
}

// Supprime un message d'erreur
function removeFormErrorMessage(element){
    element.parentElement.removeAttribute('data-error');
    element.parentElement.removeAttribute('data-error-visible');
}


function formFirstIsValid(){
  if(formFirst.value == "" || formFirst.value.length < 2){
    addFormErrorMessage(formFirst, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formFirst);
  }
}

function formLastIsValid(){
  if(formLast.value == "" || formLast.value.length < 2){
    addFormErrorMessage(formLast, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLast);
  }
}

function formEmailIsValid(){
  if (regexEmail.test(formEmail.value) != true){
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formEmail);
  }
}

function formBirthdateIsValid(){
  if(formBirthdate.value == ""){
    addFormErrorMessage(formBirthdate, "Vous devez entrer votre date de naissance.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}

function formQuantityIsValid(){
  if(formQuantity.value == "" || isNaN(formQuantity.value)){
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formQuantity);
  }
}

function formLocationIsValid(){
  if(formLocationCheck == null){
    addFormErrorMessage(formLocation, "Vous devez choisir une option.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLocation);
  }
}

function formTermsConditionsIsValid(){
  if(!formTermsConditions.checked){
    addFormErrorMessage(formTermsConditions, "Vous devez vérifier que vous acceptez les termes et conditions.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formTermsConditions);
  }
}

// Valide toutes les informations avant envoi
function validate(event){
  //Prevent to submit form
  event.preventDefault();

  // Refresh form location check each time we submit
  formLocationCheck = document.querySelector('input[name="location"]:checked');
  formIsValid = true;

  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  if(formIsValid){
    console.log("Inscription envoyée");
    return true;
  } else{
    console.log("Inscription Erreur");
    return false;
  }
}