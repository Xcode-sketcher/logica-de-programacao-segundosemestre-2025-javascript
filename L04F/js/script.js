let soma = 0;
let contador = 0;
let valor;

do {
    valor = parseFloat(prompt("Digite um valor numérico (ou um valor negativo para parar):"));

    if (valor >= 0) {
        soma += valor;
        contador++;
    }
} while (valor >= 0);

if (contador > 0) {
    let media = soma / contador;
    alert("Total do somatório: " + soma + "\nMédia aritmética: " + media.toFixed(2) + "\nTotal de valores lidos: " + contador);
} else {
    alert("Nenhum valor válido foi informado.");
}