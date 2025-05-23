let body = document.querySelector('body');
let redBtn = document.getElementById('red');
let greenBtn = document.getElementById('green');
let blueBtn = document.getElementById('blue');
let resetBtn = document.getElementById('reset');
let currentColorText = document.querySelector('span');
let customColor = document.getElementById('customColor');
let toggleDarkModeBtn = document.getElementById('toggleDarkMode');

// Toggle dark mode
toggleDarkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Function to update the displayed current background color
function updateCurrentColor() {
  const computedColor = getComputedStyle(body).backgroundColor;
  currentColorText.innerText = computedColor;
}

// Function to change background color and update current color text
function changeBackground(color) {
  body.style.background = color;
  updateCurrentColor();
  console.log("Background changed to:", color);
}

// Set initial background color text on page load
document.addEventListener("DOMContentLoaded", updateCurrentColor);


// Event listeners for color buttons
redBtn.addEventListener('click', () => changeBackground('red'));
greenBtn.addEventListener('click', () => changeBackground('green'));
blueBtn.addEventListener('click', () => changeBackground('blue'));
resetBtn.addEventListener('click', () => changeBackground('white'));

// Event listener for custom color input
customColor.addEventListener('input', () => changeBackground(customColor.value));

