let resultado = "Números divisíveis por 4 e menores que 200:\n";
let i = 1;

do {
    if (i % 4 === 0) {
        resultado += i + " é divisível por 4\n";
    }
    i++;
} while (i < 200);

alert(resultado);