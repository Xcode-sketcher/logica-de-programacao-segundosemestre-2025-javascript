let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));

let quociente = 0;
let resto = dividendo;

if (resto >= divisor) {
    do {
        resto -= divisor;
        quociente++;
    } while (resto >= divisor);
}

alert("Resultado da divisão:\nDividendo: " + dividendo + "\nDivisor: " + divisor + "\nQuociente: " + quociente + "\nResto: " + resto);