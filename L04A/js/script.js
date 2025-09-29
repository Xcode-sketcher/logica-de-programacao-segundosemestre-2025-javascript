let resultado = "Quadrados dos números de 15 a 200:\n";
let i = 15;

do {
    resultado += i + "² = " + (i * i) + "\n";
    i++;
} while (i <= 200);

alert(resultado);