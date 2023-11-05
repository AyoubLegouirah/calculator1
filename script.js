// Sélectionnez les éléments du DOM
const resultElement = document.getElementById('resultat');
const buttons = document.querySelectorAll('.contenair button');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

// Fonction pour mettre à jour l'affichage du résultat
function updateResult() {
  resultElement.textContent = currentInput;
}

// Fonction pour gérer les clics sur les boutons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (!isNaN(value) || value === '.') {
      // Si c'est un chiffre ou un point, ajoutez-le à l'entrée actuelle
      currentInput += value;
      updateResult();
    } else if (value === 'RESET') {
      // Réinitialisez la calculatrice
      currentInput = '';
      previousInput = '';
      currentOperator = '';
      updateResult();
    } else if (value === '=') {
      // Effectuez le calcul lorsque le bouton égal est cliqué
      if (currentInput && currentOperator && previousInput) {
        currentInput = calculate(parseFloat(previousInput), currentOperator, parseFloat(currentInput));
        previousInput = '';
        currentOperator = '';
        updateResult();
      }
    } else {
      // Stockez l'opérateur et l'entrée précédente
      if (currentInput) {
        previousInput = currentInput;
        currentOperator = value;
        currentInput = '';
      }
    }
  });
});

// Fonction pour effectuer des calculs
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
