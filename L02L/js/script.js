let nome = prompt("Digite o nome da pessoa:");
let sexo = prompt("Digite o sexo (M para masculino, F para feminino):").toUpperCase();

if (sexo === "M" || sexo === "MASCULINO") {
    alert("Ilmo Sr. " + nome);
} else if (sexo === "F" || sexo === "FEMININO") {
    alert("Ilma Sra. " + nome);
} else {
    alert("Sexo inválido! Por favor, digite M para masculino ou F para feminino.");
}