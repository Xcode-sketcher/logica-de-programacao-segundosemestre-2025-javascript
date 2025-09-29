let resultado = "Fatorial dos valores ímpares de 1 a 10:\n";
let i = 1;

do {
    if (i % 2 !== 0) {
        let fatorial = 1;
        let j = 1;
        do {
            fatorial *= j;
            j++;
        } while (j <= i);
        resultado += i + "! = " + fatorial + "\n";
    }
    i++;
} while (i <= 10);

alert(resultado);