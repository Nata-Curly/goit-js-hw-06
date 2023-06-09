
const inputEl = document.querySelector('#validation-input');
const textLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlurCheck);

function onInputBlurCheck(evt) {
    if (evt.currentTarget.value.length !== textLength) {
        
        inputEl.classList.add('invalid');
    } else if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        } 
        inputEl.classList.add('valid');
    
};


// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


