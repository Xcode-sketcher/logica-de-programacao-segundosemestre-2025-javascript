let resultado = "Números ímpares de 0 a 20:\n";

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        resultado += i + "\n";
    }
}

alert(resultado);