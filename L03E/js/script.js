let resultado = "Potências de 3 (expoente 0 a 15):\n";
let i = 0;

while (i <= 15) {
    let potencia = Math.pow(3, i);
    resultado += "3^" + i + " = " + potencia + "\n";
    i++;
}

alert(resultado);