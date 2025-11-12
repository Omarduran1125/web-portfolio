// Select the "Send Message"
const submitButton = document.getElementById("submit-btn");

// Add an event a click
submitButton.addEventListener("click", function(event) {
  // Prevent the form from actually submitting (so the page doesn't reload)
  event.preventDefault();

  // Display a confirmation massage 
  alert("✅ Thank you for your massage!.");
});
