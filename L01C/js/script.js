const raioInput = document.querySelector('.raio');
const alturaInput = document.querySelector('.altura');
const botao = document.querySelector('.enviar');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    const raio = Number(raioInput.value);
    const altura = Number(alturaInput.value);

    if(!raio || !altura) {
        alert('Preencha todos os campos para continuar');
        return console.error('Preencha todos os campos para continuar');
    }

    resultado.innerHTML = '';
    resultado.innerHTML = `${calcularVolume(raio, altura).toFixed(2)}cm³`;
});

function calcularVolume(raio, altura) {
    const volume = (Math.PI * (raio*raio) * altura);
    return volume;
}