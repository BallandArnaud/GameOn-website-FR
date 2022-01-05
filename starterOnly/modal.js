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

const modalBody = document.querySelector(".modal-body");
const modalSuccess = document.querySelector(".modal-success")
const modalCloseSucess = document.querySelector('.modal-success-close');

const formFirst = document.getElementById('first'); // Get firstname input
const formLast = document.getElementById('last'); // Get lastname input
const formEmail = document.getElementById('email'); // Get email input
const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
const formLocation = document.querySelector('input[name="location"]'); // Get location input radio
let formLocationCheck = document.querySelector('input[name="location"]:checked'); // Get location of next tournament input radio check
const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexName = /^[a-z ,.'-]+$/;
let formIsValid; // initialize form validation;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", function(){
  closeModal();
  if(modalbg.classList.contains('formSubmitted')){
    restartModal();
  }
});

modalCloseSucess.addEventListener("click", function(){
  closeModal();
  restartModal();
});

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// restart modal form
function restartModal(){
  modalbg.classList.remove('formSubmitted');
  modalBody.style.opacity = "1";
  modalSuccess.style.display = "none";
  formFirst.value="";
  formLast.value="";
  formEmail.value="";
  formBirthdate.value="";
  formQuantity.value="";
  formLocationCheck.checked = false;
}

// Add error message
function addFormErrorMessage(element, errorMessage){
  element.parentElement.setAttribute('data-error', errorMessage);
  element.parentElement.setAttribute('data-error-visible', 'true');
}

// Remove error message
function removeFormErrorMessage(element){
    element.parentElement.removeAttribute('data-error');
    element.parentElement.removeAttribute('data-error-visible');
}

// Check the validation of the firstname input
function formFirstIsValid(){
  if(formFirst.value == "" || formFirst.value.length < 2 || regexName.test(formFirst.value) != true){
    addFormErrorMessage(formFirst, "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formFirst);
  }
}

// Check the validation of the lastname input
function formLastIsValid(){
  if(formLast.value == "" || formLast.value.length < 2 || regexName.test(formLast.value) != true){
    addFormErrorMessage(formLast, "Veuillez entrer 2 caractères valide ou plus pour le champ du nom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLast);
  }
}

// Check the validation of the email input
function formEmailIsValid(){
  if (regexEmail.test(formEmail.value) != true){
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formEmail);
  }
}

// Check the validation of the birthdate input
function formBirthdateIsValid(){
  if(formBirthdate.value == ""){
    addFormErrorMessage(formBirthdate, "Vous devez entrer votre date de naissance.");
    formIsValid = false;
  } else if (Date.parse(formBirthdate.value) > Date.now()){
    addFormErrorMessage(formBirthdate, "Vous devez entrer une date de naissance valide.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}

// Check the validation of the quantity input
function formQuantityIsValid(){
  if(formQuantity.value == "" || isNaN(formQuantity.value)){
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formQuantity);
  }
}

// Check the validation of the location input
function formLocationIsValid(){
  if(formLocationCheck == null){
    addFormErrorMessage(formLocation, "Vous devez choisir une option.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLocation);
  }
}

// Check the validation of the terms conditions input
function formTermsConditionsIsValid(){
  if(!formTermsConditions.checked){
    addFormErrorMessage(formTermsConditions, "Vous devez vérifier que vous acceptez les termes et conditions.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formTermsConditions);
  }
}

// Check the validation of the form and return a message if it's ok
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
    modalbg.classList.add('formSubmitted');
    modalBody.style.opacity = "0";
    modalSuccess.style.display = "flex";
    return true;
  } else{
    return false;
  }
}