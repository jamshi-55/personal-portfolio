document.addEventListener("DOMContentLoaded", function () {
    if (window.emailjs) {
        console.log("EmailJS is available:", emailjs);
    } else {
        console.error("EmailJS is not available!");
    }

    document.getElementById("sendBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        const serviceID = "service_9x25wwe"; // Replace with your actual Service ID
        const templateID = "template_4s81hkl"; // Replace with your actual Template ID

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                console.log("Email sent successfully:", res);
                alert("Your message was sent successfully!");
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            })
            .catch(err => {
                console.error("EmailJS error:", err);
            });
    });
});