const inputField = document.getElementById('inputField');
const initialFontSize = 70;

function adjustFontSize() {
  let currentFontSize = parseFloat(window.getComputedStyle(inputField).fontSize);

  while ((inputField.scrollHeight > inputField.clientHeight ||
          inputField.scrollWidth > inputField.clientWidth) &&
          currentFontSize > 10) {
    currentFontSize--;
    inputField.style.fontSize = currentFontSize + 'px';
  }

  while (currentFontSize < initialFontSize) {
    inputField.style.fontSize = (currentFontSize + 1) + 'px';
    if (inputField.scrollHeight > inputField.clientHeight ||
        inputField.scrollWidth > inputField.clientWidth) {
      inputField.style.fontSize = currentFontSize + 'px';
      break;
    }
    currentFontSize++;
  }
}

inputField.addEventListener('input', adjustFontSize);
