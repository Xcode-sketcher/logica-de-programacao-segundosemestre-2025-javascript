
let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));

if (a === 0) {
    alert("Erro: A variável A deve ser diferente de zero para uma equação de segundo grau!");
} else {
    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        alert("A equação não possui raízes reais.\nDelta = " + delta);
    } else if (delta === 0) {
        let raiz = -b / (2 * a);
        alert("A equação possui uma raiz real:\nRaiz = " + raiz.toFixed(2));
    } else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("A equação possui duas raízes reais:\nRaiz 1 = " + raiz1.toFixed(2) + "\nRaiz 2 = " + raiz2.toFixed(2));
    }
}