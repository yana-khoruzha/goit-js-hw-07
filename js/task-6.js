function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const numericAmount = Number(amount);

  if (numericAmount >= 1 && numericAmount <= 100) {
    destroyBoxes();

    let currentSize = 30;

    for (let i = 0; i < numericAmount; i++) {
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${currentSize}px`;
      div.style.height = `${currentSize}px`;
      boxes.appendChild(div);
      currentSize += 10;
    }
  }

  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const inputValue = input.value;

  if (inputValue && inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
