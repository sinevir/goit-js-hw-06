/* Напиши скрипт, який для кожного елемента масиву ingredients:

 * Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
 * Додасть назву інгредієнта як його текстовий вміст.
 * Додасть елементу клас item.
 * Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

 */


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item')
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

console.log(elements);

ingredientsList.append(...elements)

