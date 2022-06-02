'use strict';

const formEL = document.getElementById('form');
const emailEL = document.getElementById('email');
const inputGroupEL = document.querySelector('.input__group');
const errorMessage = document.querySelector('.error__message');

formEL.addEventListener('submit', function (e) {
  e.preventDefault();

  validateEmail();
});

// Email validation
const validateEmail = function () {
  if (emailEL.value === '') {
    displayError('Email cannot be empty');
  } else if (checkEmail(emailEL.value)) {
    inputGroupEL.classList.remove('error');
  } else displayError('Please provide a valid email');
};

// Check email
const checkEmail = function (email) {
  email.toLowerCase().trim();

  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
};

// Display error message
const displayError = function (message) {
  inputGroupEL.classList.add('error');
  errorMessage.textContent = message;
};
