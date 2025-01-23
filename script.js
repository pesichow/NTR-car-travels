// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Book Now button action
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
        alert("Thank you for booking! Our team will contact you shortly.");
    });
});
