/*
 * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
 * та ініціалізуй її значенням 0.
 * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
 * Оновлюй інтерфейс новим значенням змінної counterValue.
*/


let counterValue = 0;

const subBtn = document.querySelector("[data-action='increment']");
const addBtn = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

subBtn.addEventListener('click', increment);
addBtn.addEventListener('click', decrement);