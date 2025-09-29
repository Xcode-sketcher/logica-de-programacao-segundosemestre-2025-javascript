let soma = 0;
let contador = 0;
let i = 50;

while (i <= 70) {
    if (i % 2 === 0) {
        soma += i;
        contador++;
    }
    i++;
}

let media = soma / contador;

alert("Soma dos valores pares entre 50 e 70: " + soma + "\nMédia aritmética: " + media.toFixed(2));