const list = document.querySelectorAll('ul#categories li.item');
const count = list.length;
console.log(`Number of categories: ${count}`);
list.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);

});