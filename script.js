const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const tempInput = document.getElementById('temp');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');

    const temp = parseFloat(tempInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    let result;

    if (from === 'celsius' && to === 'fahrenheit') {
        result = (temp * 1.8) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (temp - 32) / 1.8;
    } else {
        result = temp;
    }

    resultDiv.textContent = result.toFixed(2);
});

const darkModeButton = document.getElementById('dark-mode');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});