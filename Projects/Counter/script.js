// Select DOM elements
const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize count from LocalStorage or default to 0
let count = localStorage.getItem('counterValue') ? Number(localStorage.getItem('counterValue')) : 0;

// Update UI function
function updateCounter() {
    counterDisplay.textContent = count;
    
    // Optional dynamic color change
    if (count > 0) {
        counterDisplay.style.color = '#27ae60'; // Green for positive
    } else if (count < 0) {
        counterDisplay.style.color = '#e74c3c'; // Red for negative
    } else {
        counterDisplay.style.color = '#2c3e50'; // Default dark
    }

    // Save to LocalStorage
    localStorage.setItem('counterValue', count);
}

// Initial render call
updateCounter();

// Event Listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});