document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Full Name Validation
    let fullName = document.getElementById("fullName").value.trim();
    if (fullName === "" || fullName.length < 3) {
        showError("fullName", "Full Name must be at least 3 characters.");
        isValid = false;
    } else {
        removeError("fullName");
    }

    // Age Validation
    let age = document.getElementById("age").value.trim();
    if (age === "" || age < 10 || age > 100) {
        showError("age", "Enter a valid age between 10 and 100.");
        isValid = false;
    } else {
        removeError("age");
    }

    // Profession Validation
    let profession = document.getElementById("profession").value.trim();
    if (profession === "" || profession.length < 3) {
        showError("profession", "Profession must be at least 3 characters.");
        isValid = false;
    } else {
        removeError("profession");
    }

    // If all fields are valid, show success message
    if (isValid) {
        document.getElementById("successMessage").classList.remove("hidden");
    }
});

// Function to show error messages
function showError(inputId, message) {
    let inputField = document.getElementById(inputId);
    let errorField = inputField.nextElementSibling;
    errorField.textContent = message;
}

// Function to remove error messages
function removeError(inputId) {
    let inputField = document.getElementById(inputId);
    let errorField = inputField.nextElementSibling;
    errorField.textContent = "";
}
