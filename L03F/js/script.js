let base = parseFloat(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente:"));

let resultado = 1;
let i = 1;
while (i <= expoente) {
    resultado *= base;
    i++;
}

alert(base + "^" + expoente + " = " + resultado);