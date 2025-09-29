let resultado = "Série de Fibonacci até o 10º termo:\n";
let a = 1;
let b = 1;

resultado += "1º: " + a + "\n";
resultado += "2º: " + b + "\n";

for (let i = 3; i <= 10; i++) {
    let proximo = a + b;
    resultado += i + "º: " + proximo + "\n";
    a = b;
    b = proximo;
}

alert(resultado);