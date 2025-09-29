

let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero < 0) {
    let modulo = numero * -1;
    alert("O número " + numero + " é negativo.\nO módulo é: " + modulo);
} else if (numero > 0) {
    alert("O número " + numero + " é positivo.\nO módulo é: " + numero);
} else {
    alert("O número é zero.\nO módulo é: 0");
}