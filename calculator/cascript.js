let displayElement = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendCharacter(character) {
    if (currentInput === '' && (character === '*' || character === '/' || character === '%')) {
        return;
    }
    currentInput += character;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    displayElement.textContent = currentInput === '' ? '0' : currentInput;
}
