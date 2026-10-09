const form = document.querySelector(".form form");

if (form) {
    const formMessage = document.querySelector("#form-message");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        console.log(email);
        console.log(message);

        formMessage.textContent = "Merci, votre message a été envoyé !";
    });
}

const certificates = [
    {
        image: "images/certificat1.jpg",
        title: "HTML & CSS",
        info: "Udemy · 2024",
        link: "#"
    },
    {
    image: "images/certificate2.png",
    title: "Bootstraps : la formation ultimate",
    info: "Udemy · 2024",
    link: "#"
},
{
    image: "images/certificate.jpg",
    title: "Bootstraps : la formation ultimate",
    info: "Udemy · 2024",
    link: "#"
}
];

let currentCertificate = 0;

const certificateImage = document.getElementById("certificate-image");
const certificateTitle = document.getElementById("certificate-title");
const certificateInfo = document.getElementById("certificate-info");
const certificateLink = document.getElementById("certificate-link");

function showCertificate(index) {

    certificateImage.src = certificates[index].image;
    certificateImage.alt = certificates[index].title;

    certificateTitle.textContent = certificates[index].title;

    certificateInfo.textContent = certificates[index].info;

    certificateLink.href = certificates[index].link;
}

document.querySelector(".next").addEventListener("click", () => {

    currentCertificate++;

    if (currentCertificate >= certificates.length) {
        currentCertificate = 0;
    }

    showCertificate(currentCertificate);
});

document.querySelector(".prev").addEventListener("click", () => {

    currentCertificate--;

    if (currentCertificate < 0) {
        currentCertificate = certificates.length - 1;
    }

    showCertificate(currentCertificate);
});

showCertificate(currentCertificate);