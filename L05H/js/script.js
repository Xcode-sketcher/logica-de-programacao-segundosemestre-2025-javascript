let base = parseFloat(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente:"));

let resultado = 1;
for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}

alert(base + "^" + expoente + " = " + resultado);