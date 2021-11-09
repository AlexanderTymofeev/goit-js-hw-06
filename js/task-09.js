const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

function changeBackgrounColor() {
  document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  color.innerHTML = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', changeBackgrounColor);