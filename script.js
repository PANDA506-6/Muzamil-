function sendWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value;

    const text =
        "Hello Snow Adventure Gulmarg!%0A%0A" +
        "I would like to make a booking.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Service: " + encodeURIComponent(service) + "%0A" +
        "Date: " + encodeURIComponent(date) + "%0A" +
        "Guests: " + encodeURIComponent(guests) + "%0A" +
        "Message: " + encodeURIComponent(message);

    window.open(
        "https://wa.me/916006842497?text=" + text,
        "_blank"
    );
}
