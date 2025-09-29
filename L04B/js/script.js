let soma = 0;
let i = 1;

do {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
} while (i <= 500);

alert("O somatório dos valores pares de 1 a 500 é: " + soma);