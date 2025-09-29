const temperaturaInput = document.querySelector('.input');
const botao = document.querySelector('.submit-btn');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    const temperatura = Number(temperaturaInput.value);

    resultado.innerHTML = '';
    resultado.innerHTML = `<p>${converter(temperatura).toFixed(2)}</p>`;
})

function converter(farenheit) {
    const celsius = (farenheit - 32) * (5/9);
    return celsius;
}