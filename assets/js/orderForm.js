emailjs.init("S2U4bxQHDe8GIb5jn"); // from EmailJS dashboard

// Show modal
document.getElementById("orderBtn").addEventListener("click", function() {
    document.getElementById("orderModal").style.display = "block";
});

// Close modal
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("orderModal").style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", function(e) {
    if (e.target === document.getElementById("orderModal")) {
        document.getElementById("orderModal").style.display = "none";
    }
});

// Send email
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        order: this.order.value
    };

    emailjs.send("service_hhyjk9k", "template_kjhz0gi", templateParams)
        .then(function(response) {
            alert("Order email sent successfully!");
            document.getElementById("orderModal").style.display = "none";
            document.getElementById("orderForm").reset();
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
});