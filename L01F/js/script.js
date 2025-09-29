const trocaA = document.querySelector('#A');
const trocaB = document.querySelector('#B');
const resultado = document.querySelector('.resultado');
const trocar = document.querySelector('.trocar');


trocar.addEventListener('click', () => {
    const c = trocaB.value;
    let b = trocaA.value;
    let a = c;

    if(!a | !b ) {
        alert("Preencha todos os campos");
        return console.error("Preencha todos os campos de entrada.");
    }
    
    resultado.innerHTML = '';
    resultado.innerHTML = `<p>Valores trocados</p><p>A:${a}</p><p>B:${b}</p>`;
});