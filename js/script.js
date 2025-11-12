// Select key elements
const form = document.querySelector("form");
const submitButton = document.getElementById("submit-btn");
const messageContainer = document.getElementById("message-container");

// Listen for click
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // stop page reload

  // Create the massage
  messageContainer.innerHTML = `
    <p class="thankyou-msg">✅ Thank you for your massage!.</p>
  `;

  // Optionally clear the form
  form.reset();

  // Fade out the massage
  setTimeout(() => {
    messageContainer.innerHTML = "";
  }, 4000);
});
