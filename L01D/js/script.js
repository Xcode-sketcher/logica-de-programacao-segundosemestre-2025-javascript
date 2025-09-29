let tempo = parseFloat(prompt("Digite o tempo da viagem (horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média (km/h):"));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;
alert("Distância percorrida: " + distancia + " km\nLitros de combustível usados: " + litrosUsados.toFixed(2) + " litros");