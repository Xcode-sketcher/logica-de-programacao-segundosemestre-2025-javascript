let soma = 0;
let i = 1;

while (i <= 500) {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
}

alert("A soma dos valores pares de 1 a 500 é: " + soma);