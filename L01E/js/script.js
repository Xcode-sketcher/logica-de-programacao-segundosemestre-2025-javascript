const valor = document.querySelector('#valor');
const tempo = document.querySelector('#tempo');
const taxa = document.querySelector('#taxa');
const botao = document.querySelector('.calcular');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    const valorTotal = Number(valor.value);
    const tempoTotal = Number(tempo.value);
    const taxaMensal = Number(taxa.value);

    if(!valorTotal | !tempoTotal | !taxaMensal) {
        alert("Preencha todos os campos");
        return console.error("Preencha todos os campos de entrada com informações validas");
    }

    resultado.innerHTML = '';
    resultado.innerHTML = `<p>O valor da proxima paracela é: ${calcularTotal(valorTotal, tempoTotal, taxaMensal)}</p>`;
})

function calcularTotal(valor, tempo, taxa) {
    const prestacao = valor + (valor*taxa/100) * tempo;
    return prestacao;
}