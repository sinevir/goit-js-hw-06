/* 
 * Напиши скрипт створення і очищення колекції елементів. 
 * Користувач вводить кількість елементів в input і натискає кнопку Створити,
 * після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
 * 
 * Створи функцію createBoxes(amount), яка приймає один параметр - число. 
 * Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
 * Розміри найпершого <div> - 30px на 30px.
 * Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
 * Всі елементи повинні мати випадковий колір фону у форматі HEX. 
 * Використовуй готову функцію getRandomHexColor для отримання кольору.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

console.log(inputNum.value)

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.height = `${30 + 10 * i}px`
    divEl.style.width = `${30 + 10 * i}px`
    divEl.style.background = getRandomHexColor();
    elements.push(divEl);
  }
  return elements;
}

btnCreate.addEventListener('click', () => {
  let addBoxes = createBoxes(inputNum.value)
  boxes.append(...addBoxes);
});

const destroyBoxes = () => {
  boxes.innerHTML = '';
}

btnDestroy.addEventListener('click', destroyBoxes);