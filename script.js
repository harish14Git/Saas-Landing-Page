const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // toggle icon 
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  }
});



