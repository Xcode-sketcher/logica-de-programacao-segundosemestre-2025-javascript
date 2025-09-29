let maior = 0;
let menor = 0;
let primeiroNumero = true;

while (true) {
    let numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para sair):"));

    if (numero < 0) {
        break;
    }

    if (primeiroNumero) {
        maior = numero;
        menor = numero;
        primeiroNumero = false;
    } else {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
}

alert("Maior valor informado: " + maior + "\nMenor valor informado: " + menor);