import './style.css'

const temperatureInput = document.getElementById('temperature-input');
const convertButton = document.getElementById('convert-btn');
const resultContent = document.getElementById('result-content');
const errorMessage = document.getElementById('error-message');

function getSelectedUnit() {
  const selectedRadio = document.querySelector('input[name="unit"]:checked');
  return selectedRadio ? selectedRadio.value : null;
}

function validateInput(value) {
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return { valid: false, message: 'Please enter a temperature value' };
  }

  const numValue = parseFloat(trimmedValue);

  if (isNaN(numValue)) {
    return { valid: false, message: 'Please enter a valid number' };
  }

  return { valid: true, value: numValue };
}

function convertTemperature(value, fromUnit) {
  let celsius;

  if (fromUnit === 'celsius') {
    celsius = value;
  } else if (fromUnit === 'fahrenheit') {
    celsius = (value - 32) * 5 / 9;
  } else if (fromUnit === 'kelvin') {
    celsius = value - 273.15;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  return {
    celsius: celsius.toFixed(2),
    fahrenheit: fahrenheit.toFixed(2),
    kelvin: kelvin.toFixed(2)
  };
}

function displayResult(originalValue, fromUnit, conversions) {
  const unitSymbols = {
    celsius: '°C',
    fahrenheit: '°F',
    kelvin: 'K'
  };

  const unitNames = {
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    kelvin: 'Kelvin'
  };

  let html = `<p><strong>${originalValue} ${unitSymbols[fromUnit]}</strong> is equal to:</p>`;

  if (fromUnit !== 'celsius') {
    html += `<p>${conversions.celsius} ${unitSymbols.celsius} (${unitNames.celsius})</p>`;
  }
  if (fromUnit !== 'fahrenheit') {
    html += `<p>${conversions.fahrenheit} ${unitSymbols.fahrenheit} (${unitNames.fahrenheit})</p>`;
  }
  if (fromUnit !== 'kelvin') {
    html += `<p>${conversions.kelvin} ${unitSymbols.kelvin} (${unitNames.kelvin})</p>`;
  }

  resultContent.innerHTML = html;
}

function handleConvert() {
  const inputValue = temperatureInput.value;
  const validation = validateInput(inputValue);

  if (!validation.valid) {
    errorMessage.textContent = validation.message;
    temperatureInput.classList.add('error');
    return;
  }

  errorMessage.textContent = '';
  temperatureInput.classList.remove('error');

  const selectedUnit = getSelectedUnit();
  const conversions = convertTemperature(validation.value, selectedUnit);

  displayResult(validation.value, selectedUnit, conversions);
}

convertButton.addEventListener('click', handleConvert);

temperatureInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleConvert();
  }
});

temperatureInput.addEventListener('input', () => {
  if (errorMessage.textContent) {
    errorMessage.textContent = '';
    temperatureInput.classList.remove('error');
  }
});
