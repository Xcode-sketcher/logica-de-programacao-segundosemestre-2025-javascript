let a = prompt("Digite o valor de A:");
let b = prompt("Digite o valor de B:");
let c = a;
a = b;
b = c;
alert("Valores originais:\nA original: " + c + "\nB original: " + a + "\n\nApós a troca:\nA: " + a + "\nB: " + b);