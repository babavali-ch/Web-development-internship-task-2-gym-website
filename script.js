// Contact button message
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", () => {
  message.textContent = "Thank you for contacting FitZone Gym! We will reach out to you soon.";
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Join button alert
const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Membership request submitted successfully!");
  });
});