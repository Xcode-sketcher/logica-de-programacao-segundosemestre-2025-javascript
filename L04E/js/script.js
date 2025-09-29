let totalNegativos = 0;
let i = 1;

do {
    let valor = parseInt(prompt("Digite o " + i + "º valor inteiro:"));
    if (valor < 0) {
        totalNegativos++;
    }
    i++;
} while (i <= 15);

alert("Total de valores negativos: " + totalNegativos);