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
