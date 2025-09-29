let areaTotal = 0;
let resposta;

do {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo (m):"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m):"));

    let area = largura * comprimento;
    areaTotal += area;

    alert("Área do " + nome + ": " + area + " m²");

    resposta = prompt("Deseja continuar calculando novos cômodos? (NAO para parar):");
} while (resposta.toUpperCase() !== "NAO");

alert("Área total da residência: " + areaTotal + " m²");