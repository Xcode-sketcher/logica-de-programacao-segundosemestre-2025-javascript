let resultado = "Potências de 3 (expoente 0 a 15):\n";

for (let i = 0; i <= 15; i++) {
    let potencia = Math.pow(3, i);
    resultado += "3^" + i + " = " + potencia + "\n";
}

alert(resultado);