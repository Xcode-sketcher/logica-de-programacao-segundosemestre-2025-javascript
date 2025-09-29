let resultado = "Números ímpares de 0 a 20:\n";
let i = 0;

while (i <= 20) {
    if (i % 2 !== 0) {
        resultado += i + "\n";
    }
    i++;
}

alert(resultado);