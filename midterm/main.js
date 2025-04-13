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
    let isValid = true;
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
      // alert("Form submitted successfully!");
      // form.reset();
      startGame();
    }
  });
});

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let score = 0;

const formPage = document.getElementById("formPage");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const tooHighMsg = document.getElementById("tooHigh");
const tooLowMsg = document.getElementById("tooLow");
const gameOver = document.getElementById("gameOver");
const correctResultMsg = document.getElementById("correctResult");
const scoreText = document.getElementById("scoreText");
const attemptsText = document.getElementById("attemptsText");
const errorMsg = document.getElementById("error-message-guessing-game");
const guessHistoryList = document.getElementById("guessHistoryList");

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  score = 0;
  guessInput.value = "";
  scoreText.textContent = `Score: ${score}`;
  attemptsText.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
  errorMsg.classList.add("hidden");
  tooHighMsg.classList.add("hidden");
  tooLowMsg.classList.add("hidden");
  correctResultMsg.classList.add("hidden");
  gameOver.classList.add("hidden");
  guessBtn.disabled = false;
  guessInput.disabled = false;
  guessHistoryList.innerHTML = "";
}

function showResultMessage(resultType) {
  tooHighMsg.classList.add("hidden");
  tooLowMsg.classList.add("hidden");
  correctResultMsg.classList.add("hidden");
  gameOver.classList.add("hidden");
  resultType === "high"
    ? tooHighMsg.classList.remove("hidden")
    : resultType === "low"
    ? tooLowMsg.classList.remove("hidden")
    : resultType === "gameOver"
    ? gameOver.classList.remove("hidden")
    : correctResultMsg.classList.remove("hidden");
}

function handleGuessValidation(guess) {
  if (!guess || guess < 1 || guess > 100) {
    errorMsg.classList.remove("hidden");
    return false;
  }
  errorMsg.classList.add("hidden");
  return true;
}

function handleAttemptsChange() {
  attemptsText.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
  if (attempts >= maxAttempts) {
    showResultMessage("gameOver");
    guessBtn.disabled = true;
    guessInput.disabled = true;
    return;
  }
}

function handleAddHistoryItem(guess, resultText) {
  const historyItem = document.createElement("li");
  historyItem.className = "guessHistoryItem";
  historyItem.innerHTML = `You guessed <span class="numberText">${guess}</span> ${resultText}`;
  guessHistoryList.prepend(historyItem);
}

function handleGuess() {
  const guess = Number(guessInput.value);

  if (!handleGuessValidation(guess)) {
    return;
  }

  let resultType = "";
  let resultText = "";

  if (guess === secretNumber) {
    score++;
    scoreText.textContent = `Score: ${score}`;
    resultType = "correct";
    resultText = `( Correct )`;
    showResultMessage(resultType);
    attempts = 0;
    handleAttemptsChange();
    secretNumber = Math.floor(Math.random() * 100) + 1;
  } else if (guess > secretNumber) {
    resultType = "high";
    resultText = `( Too High )`;
    showResultMessage(resultType);
    attempts++;
    handleAttemptsChange();
  } else {
    resultType = "low";
    resultText = `( Too Low )`;
    showResultMessage(resultType);
    attempts++;
    handleAttemptsChange();
  }

  handleAddHistoryItem(guess, resultText);
  guessInput.value = "";
}

function startGame() {
  formPage.classList.add("hidden");
  const guessingGame = document.getElementById("guessingGame");
  guessingGame.classList.remove("hidden");
  guessBtn.addEventListener("click", handleGuess);
  restartBtn.addEventListener("click", resetGame);
  resetGame();
}
