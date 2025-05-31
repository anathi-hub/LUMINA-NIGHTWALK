const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Essence! We'll get back to you soon.");
  contactForm.reset();
});
