let resultado = "Conversão Celsius → Fahrenheit:\n";
let celsius = 10;

while (celsius <= 100) {
    let fahrenheit = (9 * celsius + 160) / 5;
    resultado += celsius + "°C = " + fahrenheit + "°F\n";
    celsius += 10;
}

alert(resultado);