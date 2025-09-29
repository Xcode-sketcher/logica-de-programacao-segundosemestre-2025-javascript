
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let num3 = parseInt(prompt("Digite o terceiro número inteiro:"));
let num4 = parseInt(prompt("Digite o quarto número inteiro:"));

let numerosDivisiveis = [];

if (num1 % 2 === 0 && num1 % 3 === 0) {
    numerosDivisiveis.push(num1);
}
if (num2 % 2 === 0 && num2 % 3 === 0) {
    numerosDivisiveis.push(num2);
}
if (num3 % 2 === 0 && num3 % 3 === 0) {
    numerosDivisiveis.push(num3);
}
if (num4 % 2 === 0 && num4 % 3 === 0) {
    numerosDivisiveis.push(num4);
}

if (numerosDivisiveis.length > 0) {
    alert("Números divisíveis por 2 e 3: " + numerosDivisiveis.join(", "));
} else {
    alert("Nenhum número é divisível por 2 e 3 ao mesmo tempo.");
}