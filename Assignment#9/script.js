const toggleButton = document.querySelector('button[name="toggle"]');
const colorBox = document.querySelector('.green');

toggleButton.addEventListener('click', () => {
  const nextClass = colorBox.classList.contains('green') ? 'red' : 'green';
  const currentClass = nextClass === 'red' ? 'green' : 'red';

  colorBox.classList.replace(currentClass, nextClass);
});
