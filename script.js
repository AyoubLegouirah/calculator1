const resultElement = document.getElementById('resultat');
const buttons = document.querySelectorAll('.contenair button');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return num2;
  }
}

function updateResult() {
  resultElement.textContent = currentInput;
}

buttons.forEach(button => {

  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      currentInput = currentInput + value;
      updateResult();

    } else if (value === 'RESET') {
      currentInput = '';
      previousInput = '';
      currentOperator = '';
      updateResult();
      
    } else if (value === '=') {
      if (currentInput && currentOperator && previousInput) {
        currentInput = calculate(parseFloat(previousInput), currentOperator, parseFloat(currentInput));
        previousInput = '';
        currentOperator = '';
        updateResult();
      }

    } else {
      if (currentInput) {
        previousInput = currentInput;
        currentOperator = value;
        currentInput = '';
      }
    }
  });
});


