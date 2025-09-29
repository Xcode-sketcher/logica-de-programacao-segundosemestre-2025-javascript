let reais = parseFloat(prompt("Digite a quantidade de reais:"));
let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let dolar = reais / cotacao;
alert("Valor em dólares: $" + dolar.toFixed(2));