const randomBtn = document.getElementById('random-btn');
const resetBtn = document.getElementById('reset-btn');
const colorCodeSpan = document.getElementById('color-code');
const presetButtons = document.querySelectorAll('.preset-btn');

// Function to apply background color and update UI + LocalStorage
function applyColor(color) {
    document.body.style.backgroundColor = color;
    colorCodeSpan.textContent = color;
    localStorage.setItem('savedBackgroundColor', color);
}

// Generate random HEX color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Load saved background color on startup
const savedColor = localStorage.getItem('savedBackgroundColor');
if (savedColor) {
    applyColor(savedColor);
}

// Event Listener for Random Color Button
randomBtn.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    applyColor(newColor);
});

// Event Listener for Reset Button (defaults to white/light gray)
resetBtn.addEventListener('click', () => {
    applyColor('#f4f7f6');
});

// Event Listeners for Preset Color Circles
presetButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedColor = e.target.getAttribute('data-color');
        applyColor(selectedColor);
    });
});