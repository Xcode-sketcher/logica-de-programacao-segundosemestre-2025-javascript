const tempo = document.querySelector('#tempo');
const velocidade = document.querySelector('#velocidade');
const botaoCalcular = document.querySelector('.calcular');
const resultado = document.querySelector('.resultado');

botaoCalcular.addEventListener('click', () => {
    const tempoPercorrido = Number(tempo?.value);
    const velocidadeMedia = Number(velocidade?.value);
    
    if (!tempoPercorrido | !velocidade) {
        alert("Preencha todos os campos de entrada");
        return console.error("Preencha todos os campos de entrada, incluindo tempo e velocidade. Nenhum dos campos devem permanecer vazios");        
    }

    resultado.innerHTML = '';
    resultado.innerHTML = `<p>${calcularDistancia(tempoPercorrido, velocidadeMedia)} Quilômetros</p>
                            <p>${tempoPercorrido} Horas de duração</p>
                            <p>${calcularLitros(calcularDistancia(tempoPercorrido, velocidadeMedia)).toFixed(2)} Litros usados`; 
    
})

function calcularDistancia(tempo, velocidade) {
    const distancia = tempo * velocidade;
    return distancia;
}
function calcularLitros(distancia) {
    const litros_usados = distancia / 12;
    return litros_usados;
}