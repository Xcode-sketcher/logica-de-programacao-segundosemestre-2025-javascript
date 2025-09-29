

let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

let maior = Math.max(num1, num2);
let menor = Math.min(num1, num2);
let diferenca = maior - menor;

alert("A diferença do maior pelo menor é: " + diferenca);