const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector('#ingredients');

// ingredients.forEach((ingredient) => {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredient;
  
//   console.log(li);
//   list.append(li);
// });

const list = document.querySelector('#ingredients');

const markup = 
  ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    return li;
  });
console.log(markup);
list.append(...markup);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.
