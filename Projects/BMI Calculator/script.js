const bmiForm = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultContainer = document.getElementById('result-container');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiCategorySpan = document.getElementById('bmi-category');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

// Load history from LocalStorage
let bmiHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];

function renderHistory() {
    historyList.innerHTML = '';
    if (bmiHistory.length === 0) {
        historyList.innerHTML = '<li style="color: #777; text-align: center;">No history yet</li>';
        return;
    }

    bmiHistory.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>BMI: <strong>${item.bmi}</strong> (${item.category})</span> <span>${item.date}</span>`;
        historyList.appendChild(li);
    });
}

// Initial render
renderHistory();

bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (weight <= 0 || heightCm <= 0) return;

    // Convert height from cm to meters
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#f39c12';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        color = '#27ae60';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        color = '#e67e22';
    } else {
        category = 'Obese';
        color = '#e74c3c';
    }

    // Display result
    bmiValueSpan.textContent = bmi;
    bmiValueSpan.style.color = color;
    bmiCategorySpan.textContent = category;
    resultContainer.classList.remove('hidden');

    // Save to history array & LocalStorage
    const newEntry = {
        bmi,
        category,
        date: new Date().toLocaleDateString()
    };

    bmiHistory.unshift.unshift ? bmiHistory.unshift(newEntry) : bmiHistory.unshift(newEntry); // Add to beginning
    if (bmiHistory.length > 5) bmiHistory.pop(); // Keep only last 5 items

    localStorage.setItem('bmiHistory', JSON.stringify(bmiHistory));
    renderHistory();
});

clearHistoryBtn.addEventListener('click', () => {
    bmiHistory = [];
    localStorage.removeItem('bmiHistory');
    renderHistory();
});