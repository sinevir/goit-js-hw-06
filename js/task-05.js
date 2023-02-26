/* Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
 * підставляє його поточне значення в span#name-output. 
 * Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const nameInputValue = document.querySelector('#name-input');
const nameOutputValue = document.querySelector('#name-output');

function onInputChange(name) {
    
    nameOutputValue.textContent = name.currentTarget.value;
    
    if (name.currentTarget.value === '') {
        nameOutputValue.textContent = 'Anonymous';
    }
};

nameInputValue.addEventListener('input', onInputChange);
