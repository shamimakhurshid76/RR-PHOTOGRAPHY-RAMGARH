// WhatsApp form
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let number = "919006211773"; // 🔴 PUT YOUR NUMBER

    let url = "https://wa.me/" + number + "?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Message: " + message;

    window.open(url, "_blank");
});

// Floating WhatsApp button
document.getElementById("whatsappBtn").addEventListener("click", function() {
    window.open("https://wa.me/919876543210", "_blank");
});
