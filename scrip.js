// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const modal = document.getElementById("myModal");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  // Check if elements exist
  if (!modal || !openBtn || !closeBtn) {
    console.error('Modal elements not found!');
    return;
  }

  // Open popup
  openBtn.addEventListener('click', function() {
    modal.style.display = "block";
    console.log('Modal opened');
  });

  // Close popup
  closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
    console.log('Modal closed');
  });

  // Close if clicking outside
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('Modal closed by clicking outside');
    }
  });
});

// Portfolio and Resume functions
function showPortfolio() {
  alert('Portfolio coming soon! 🚀\n\nIn the meantime, check out my GitHub or contact me for project details.');
  console.log('Portfolio button clicked');
}

function downloadResume() {
  alert('Resume download feature coming soon! 📄\n\nFor now, please contact me at js.jordan.s25@gmail.com for my resume.');
  console.log('Resume download button clicked');
}
