document.addEventListener("DOMContentLoaded", function () {

    const username = localStorage.getItem("username");

    if (username) {

        const usernameElement = document.getElementById("username");
        usernameElement.textContent = username;

        const signInButton = document.getElementById("signInButton");
        signInButton.textContent = username;
    }
});

window.onbeforeunload = function() {
    localStorage.clear();
  };