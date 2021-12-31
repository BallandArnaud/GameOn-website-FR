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


function validate(event){
  //Prevent to submit form
  event.preventDefault();

  const formFirst = document.getElementById('first'); // Get firstname input
  const formLast = document.getElementById('last'); // Get lastname input
  const formEmail = document.getElementById('email'); // Get email input
  const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
  const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
  const formLocation = document.querySelector('input[name="location"]:checked'); // Get location of next tournament input radio check
  const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(formFirst.value == "" || formFirst.value.length < 2){
    console.log('Problème firstName');
    return false;
  }

  if(formLast.value == "" || formLast.value.length < 2){
    console.log('Problème lastname');
    return false;
  }

  if (regexEmail.test(formEmail.value) != true){
    console.log('Problème adresse email');
    return false;
  }

  if(isNaN(formQuantity.value)){
    console.log("Problème quantité tournois n'est pas un nombre");
    return false;
  }

  if(formLocation == null){
    console.log('Problème aucune location est cochée');
    return false;
  }

  if(!formTermsConditions.checked){
    console.log('Problème la case conditions générales est non cochée');
    return false;
  }

  console.log("Inscription envoyée");
  return true;
}