let dolar = parseFloat(prompt("Digite a quantidade de dólares:"));
let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let reais = dolar * cotacao;
alert("Valor em reais: R$ " + reais.toFixed(2));