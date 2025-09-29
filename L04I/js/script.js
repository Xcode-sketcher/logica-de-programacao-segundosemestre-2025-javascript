let maior = 0;
let menor = 0;
let primeiroNumero = true;
let valor;

do {
    valor = parseInt(prompt("Digite um valor inteiro positivo (ou negativo para sair):"));

    if (valor >= 0) {
        if (primeiroNumero) {
            maior = valor;
            menor = valor;
            primeiroNumero = false;
        } else {
            if (valor > maior) {
                maior = valor;
            }
            if (valor < menor) {
                menor = valor;
            }
        }
    }
} while (valor >= 0);

alert("Maior valor informado: " + maior + "\nMenor valor informado: " + menor);