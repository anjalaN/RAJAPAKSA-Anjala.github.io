const form = document.querySelector(".form form");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log(email);
    console.log(message);

    formMessage.textContent = "Merci, votre message a été envoyé !";

});