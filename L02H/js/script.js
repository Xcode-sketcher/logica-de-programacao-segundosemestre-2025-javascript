
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let num3 = parseInt(prompt("Digite o terceiro número inteiro:"));
let num4 = parseInt(prompt("Digite o quarto número inteiro:"));
let num5 = parseInt(prompt("Digite o quinto número inteiro:"));

let maior = Math.max(num1, num2, num3, num4, num5);
let menor = Math.min(num1, num2, num3, num4, num5);

alert("Números digitados: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 +
    "\nMaior valor: " + maior +
    "\nMenor valor: " + menor);