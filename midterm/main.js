function isEmptyField(field) {
  return field.value.trim() === "";
}
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.value.trim());
}
function isValidPassword(password) {
  return password.value.length >= 8;
}
function isValidTeamSize(size) {
  return !!size.value && size.value > 0 && size.value <= 3;
}
function isValidCheckboxes(checkboxes) {
  return !!checkboxes && checkboxes.length >= 3;
}
function showError(element, message) {
  const error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "#CC777B";
  error.style.fontSize = "12px";
  error.style.letterSpacing = "2%";
  error.textContent = message;

  if (element.id != "formGroupCheckBoxes") element.classList.add("wrong-input");
  element.parentNode.appendChild(error);
}
function clearErrors() {
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("groupForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const isValid = true;
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const teamSize = document.getElementById("teamSize");
    const checkboxes = document.querySelectorAll(
      "input[name='technologies']:checked"
    );
    const checkboxesContainer = document.getElementById("formGroupCheckBoxes");
    [name, surname, email, password].forEach((input) => {
      if (isEmptyField(input)) {
        showError(input, "This field is required.");
        isValid = false;
      }
    });
    if (!isValidEmail(email)) {
      showError(email, "Invalid email format.");
      isValid = false;
    }
    if (!isValidPassword(password)) {
      showError(password, "Password must be at least 8 characters long.");
      isValid = false;
    }
    if (!isValidTeamSize(teamSize)) {
      showError(teamSize, "Team size must be between 1 and 3.");
      isValid = false;
    }
    if (!isValidCheckboxes(checkboxes)) {
      showError(
        checkboxesContainer,
        "At least 3 technologies must be selected."
      );
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
