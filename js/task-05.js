
const refs = {
inputEl: document.querySelector('#name-input'),
outputEl: document.querySelector('#name-output')
}
console.log(refs.inputEl);
console.log(refs.outputEl);

// refs.inputEl.addEventListener('change', onInput);
refs.inputEl.addEventListener('input', onInput);


function onInput(event) { 
    if (!refs.inputEl.value) {
        refs.outputEl.textContent = 'Anonymous';
    } else
    // console.log(event.currentTarget.value);
    { refs.outputEl.textContent = event.currentTarget.value; }
};



// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>