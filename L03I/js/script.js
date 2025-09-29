let soma = 0;
let i = 1;

while (i <= 10) {
    let valor = parseFloat(prompt("Digite o " + i + "º valor:"));
    soma += valor;
    i++;
}

let media = soma / 10;

alert("Soma total: " + soma + "\nMédia: " + media.toFixed(2));