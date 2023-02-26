/* Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
 * по кліку на button.change-color і виводить значення кольору в span.color.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')
const valueColor = document.querySelector('.color')

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  valueColor.textContent = bodyColor.style.backgroundColor;
}

changeColorBtn.addEventListener('click', changeColor);

