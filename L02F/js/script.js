
let a = parseFloat(prompt("Digite o valor A:"));
let b = parseFloat(prompt("Digite o valor B:"));
let c = parseFloat(prompt("Digite o valor C:"));

let valores = [a, b, c];
valores.sort((x, y) => x - y);

alert("Os valores em ordem crescente são:\n" + valores[0] + ", " + valores[1] + ", " + valores[2]);