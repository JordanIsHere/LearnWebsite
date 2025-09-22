// script.js

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for navbar height
        behavior: "smooth"
      });
    }
  });
});

// ===== Popup Modal =====
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ===== Extra: Console Greeting =====
console.log("🚀 Welcome to Jordan Sirpali's Portfolio Website!");
