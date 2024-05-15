document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('text');
  const buttons = document.querySelectorAll('button');
  let displayValue = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;

      if (button.classList.contains('cl')) {
        if (buttonText === 'AC') {
          displayValue = '';
        } else if (buttonText === 'DEL') {
          displayValue = displayValue.slice(0, -1);
        } else if (buttonText === '%') {
          if (displayValue !== '') {
            displayValue = (parseFloat(displayValue) / 100).toString();
          }
        }
      } else if (button.classList.contains('opp')) {
        if (buttonText === 'x') {
          displayValue += '*';
        } else {
          displayValue += buttonText;
        }
      } else if (button.classList.contains('equal')) {
        try {
          displayValue = eval(displayValue).toString();
        } catch {
          displayValue = 'Error';
        }
      } else {
        displayValue += buttonText;
      }

      display.value = displayValue;
    });
  });
});
