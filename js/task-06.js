/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
 * перевіряє його вміст щодо правильної кількості введених символів.
 * 
 * Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
 * якщо неправильна кількість - червоним.
 * 
 * Для додавання стилів використовуй CSS-класи valid і invalid, 
 * які ми вже додали у вихідні файли завдання.
*/

const inputSymbols = document.querySelector("#validation-input");
const validInput = document.querySelector("#validation-input.valid");
const invalidInput = document.querySelector("#validation-input.invalid");


function onInputBlur(event) {
    let inputLength = ( event.currentTarget.value ).length;
    console.log();
    if ( inputLength === 6 ) {
        console.log('Green');
        inputSymbols.classList.remove('invalid');
        inputSymbols.classList.add('valid');
    } else {
        console.log('Red');
        inputSymbols.classList.add('invalid');
    }
}

inputSymbols.addEventListener('blur', onInputBlur);
