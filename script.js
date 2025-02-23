// Redirect to signup page when button is clicked
function redirectToSignup() {
    window.location.href = "signup.html";
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

