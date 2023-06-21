const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#psw');
const passwordInput2 = document.querySelector('#psw2');
const nameError = document.querySelector('.name-error-message');
const passwordError = document.querySelector('.password-error-message');
const passwordError2 = document.querySelector('.password-error-message2');


nameInput.addEventListener("input", function (event) {

  const value = event.target.value;

  if (value.length < 3) {
    nameError.innerHTML =
      "Numele trebuie sa contina minim 3 caractere.";
  } else {
    nameError.innerHTML = "";
  }
});

passwordInput.addEventListener("input", function (event) {

  const value = event.target.value;

  if (value.length < 8) {
    passwordError.innerHTML =
      "Parola trebuie sa contina minim 8 caractere.";
  } else {
    passwordError.innerHTML = "";
  }
});

passwordInput2.addEventListener("input", function () {

  if (passwordInput.value === passwordInput2.value) {
    passwordError2.innerHTML = "";
  } else {
    passwordError2.innerHTML = "Parolele trebuie sa fie identice";
  }
});


  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name");
    const password = document.getElementById("psw");
    const confirmPassword = document.getElementById("psw2");
    const nameErrorMessage = document.querySelector(".name-error-message");
    const passwordErrorMessage = document.querySelector(".password-error-message");
    const confirmPasswordErrorMessage = document.querySelector(".password-error-message2");

   
    if (name.value === "" || name.value.length < 3) {
      nameErrorMessage.textContent = "Introdu numele de utilizator care sa contina minim 3 caractere.";
      return;
    } else {
      nameErrorMessage.textContent = "";
    }

   
    if (password.value === "" || password.value.length < 8) {
      passwordErrorMessage.textContent = "Alege o parola de minim 8 caractere.";
      return;
    } else {
      passwordErrorMessage.textContent = "";
    }

   
    if (confirmPassword.value === "") {
      confirmPasswordErrorMessage.textContent = "Confirma parola.";
      return;
    } else if (password.value !== confirmPassword.value) {
      confirmPasswordErrorMessage.textContent = "Parolele trebuie sa fie identice.";
      return;
    } else {
      confirmPasswordErrorMessage.textContent = "";
    }

    localStorage.setItem("username", name.value);

    window.location.href = "Home.html";
  });

