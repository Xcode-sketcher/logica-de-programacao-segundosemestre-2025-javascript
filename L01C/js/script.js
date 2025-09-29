let raio = parseFloat(prompt("Digite o raio (cm):"));
let altura = parseFloat(prompt("Digite a altura (cm):"));
let volume = Math.PI * (raio * raio) * altura;
alert("O volume do cilindro é: " + volume.toFixed(2) + " cm³");