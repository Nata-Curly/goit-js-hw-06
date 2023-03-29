
const counterValue = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    }

};

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
// console.log(incrementButton);
// console.log(decrementButton);
// console.log(valueEl);

incrementButton.addEventListener('click', function () {
    counterValue.increment();
    // console.log(counterValue);
    valueEl.textContent = counterValue.value;
});
decrementButton.addEventListener('click', function () {
    counterValue.decrement();
    // console.log(counterValue);
    valueEl.textContent = counterValue.value;
});


// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.