"use strict"
const temperaturaInput = document.querySelector('.input');
const botao = document.querySelector('.submit-btn');
const result = document.querySelector('.resultado');
botao.addEventListener('click', () => {
    const temperatura = Number(temperaturaInput.value);

    result.innerHTML = '';
    result.innerHTML = `<p>${converter(temperatura)}</p>`;
});

function converter(temperatura) {
    const farenheit = (9 * temperatura + 160)/5;
    return farenheit;
}