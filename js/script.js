// Variables

const nome = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");

// Placeholders from Form 
const textName = nome.placeholder;
const textEmail = email.placeholder;
const textNumber = number.placeholder;

// Name
nome.addEventListener("focus", function () {
  if (nome.placeholder === textName) {
    nome.placeholder = "Ex: Fulano";
  } else {
  }
});

nome.addEventListener("blur", function () {
  if (nome.placeholder !== textName) {
    nome.placeholder = textName;
  } else {
  }
});

// Email
email.addEventListener("focus", function () {
  if (email.placeholder === textEmail) {
    email.placeholder = "Ex: email@gmail.com";
  } else {
  }
});

email.addEventListener("blur", function () {
  if (email.placeholder !== textEmail) {
    email.placeholder = textEmail;
  } else {
  }
});

// Number
number.addEventListener("focus", function () {
  if (number.placeholder === textNumber) {
    number.placeholder = "Ex: (12) 34567890";
  } else {
  }
});

number.addEventListener("blur", function () {
  if (number.placeholder !== textNumber) {
    number.placeholder = textNumber;
  } else {
  }
});
