let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

let resultado = "Tabuada do " + numero + ":\n";
let i = 1;
while (i <= 10) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    i++;
}

alert(resultado);