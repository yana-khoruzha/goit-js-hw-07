const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', () => {
  nameOutput.textContent = input.value.trim();

  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'Anonymous';
  }
})