let resultado = "Fatorial dos valores ímpares de 1 a 10:\n";

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        let fatorial = 1;
        for (let j = 1; j <= i; j++) {
            fatorial *= j;
        }
        resultado += i + "! = " + fatorial + "\n";
    }
}

alert(resultado);