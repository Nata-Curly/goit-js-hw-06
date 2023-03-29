const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', fontSizeControlChange);

function fontSizeControlChange(evt) {
    console.log(evt.currentTarget.valueAsNumber);
    spanEl.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
    // spanEl.style.fontSize = evt.currentTarget.valueAsNumber + 'px';
}



// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>