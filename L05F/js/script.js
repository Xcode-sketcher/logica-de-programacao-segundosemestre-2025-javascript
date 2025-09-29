let resultado = "Números divisíveis por 4 e menores que 200:\n";

for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
        resultado += i + " é divisível por 4\n";
    }
}

alert(resultado);