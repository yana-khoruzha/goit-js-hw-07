function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const arrayOfDiv = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();

    if (arrayOfDiv.length === 0) {
      div.style.width = '30px';
      div.style.height = '30px';
      arrayOfDiv.push(div);
    } else {
      div.style.width =
        +arrayOfDiv[arrayOfDiv.length - 1].style.width.slice(0, -2) + 10 + 'px';
      div.style.height =
        +arrayOfDiv[arrayOfDiv.length - 1].style.width.slice(0, -2) + 10 + 'px';
      arrayOfDiv.push(div);
    }

    boxes.append(div);
  }
}

function destroyBoxes() {
  divs.forEach(item => {
    item.remove();
  });
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const divs = boxes.querySelectorAll('div');

createButton.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
