let areaTotal = 0;
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"));

    let area = largura * comprimento;
    areaTotal += area;

    alert("A área do " + nome + " é: " + area + " m²");

    continuar = confirm("Deseja calcular a área de outro cômodo?");
}

alert("Área total da residência: " + areaTotal + " m²");