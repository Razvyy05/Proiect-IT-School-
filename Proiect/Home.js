const panels = document.querySelectorAll(' .panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

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