// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Contact form
const form = document.getElementById("projectForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const websiteType = document.getElementById("websiteType").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !message) {

        formMessage.textContent =
            "Please fill all required fields.";

        formMessage.style.color = "#dc2626";

        return;
    }


    // Create WhatsApp message
    const whatsappMessage =
        `Hello mhdverse web studio,

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Website Type: ${websiteType || "Not specified"}
Budget: ${budget || "Not specified"}

Project Details:
${message}`;


    const whatsappURL =
        "https://wa.me/916299649366?text=" +
        encodeURIComponent(whatsappMessage);


    formMessage.textContent =
        "Opening WhatsApp...";

    formMessage.style.color = "#16a34a";


    window.open(whatsappURL, "_blank");


    form.reset();

});
