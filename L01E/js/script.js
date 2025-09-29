let valor = parseFloat(prompt("Digite o valor da prestação:"));
let tempo = parseFloat(prompt("Digite o tempo de atraso (meses):"));
let taxa = parseFloat(prompt("Digite a taxa de juros (% ao mês):"));
let prestacao = valor + (valor * taxa / 100) * tempo;
alert("O valor da prestação com juros é: R$ " + prestacao.toFixed(2));