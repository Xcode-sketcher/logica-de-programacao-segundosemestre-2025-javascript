
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    alert("Aluno APROVADO!\nMédia: " + media.toFixed(2));
} else {
    let notaExame = parseFloat(prompt("O aluno ficou em exame.\nDigite a nota do exame:"));
    let novaMedia = (media + notaExame) / 2;

    if (novaMedia >= 5) {
        alert("Aluno APROVADO EM EXAME!\nMédia inicial: " + media.toFixed(2) + "\nNova média com exame: " + novaMedia.toFixed(2));
    } else {
        alert("Aluno REPROVADO!\nMédia inicial: " + media.toFixed(2) + "\nMédia final com exame: " + novaMedia.toFixed(2));
    }
}