function sendToWhatsApp() {
    const name = document.getElementById('userName').value;
    const event = document.getElementById('eventType').value;
    const msg = document.getElementById('userMsg').value;
    
    // REPLACE WITH YOUR ACTUAL PHONE NUMBER (Include Country Code)
    const phoneNumber = "919006211773"; 

    if (name === "" || event === "") {
        alert("Please fill in your name and event type!");
        return;
    }

    const message = `Hello RR Photography!%0A%0A*Client Name:* ${name}%0A*Event:* ${event}%0A*Details:* ${msg}`;
    const waUrl = `https://wa.me{phoneNumber}?text=${message}`;

    window.open(waUrl, '_blank');
}
