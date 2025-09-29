let resultado = "Conversão Celsius → Fahrenheit:\n";

for (let celsius = 10; celsius <= 100; celsius += 10) {
    let fahrenheit = (9 * celsius + 160) / 5;
    resultado += celsius + "°C = " + fahrenheit + "°F\n";
}

alert(resultado);