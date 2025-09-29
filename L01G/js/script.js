let a = parseFloat(prompt("Digite o primeiro número (A):"));
let b = parseFloat(prompt("Digite o segundo número (B):"));
let c = parseFloat(prompt("Digite o terceiro número (C):"));
let d = parseFloat(prompt("Digite o quarto número (D):"));

let somaAB = a + b;
let somaAC = a + c;
let somaAD = a + d;
let somaBC = b + c;
let somaBD = b + d;
let somaCD = c + d;

let multAB = a * b;
let multAC = a * c;
let multAD = a * d;
let multBC = b * c;
let multBD = b * d;
let multCD = c * d;

alert("ADIÇÕES:\nA + B = " + somaAB + "\nA + C = " + somaAC + "\nA + D = " + somaAD +
    "\nB + C = " + somaBC + "\nB + D = " + somaBD + "\nC + D = " + somaCD +
    "\n\nMULTIPLICAÇÕES:\nA × B = " + multAB + "\nA × C = " + multAC +
    "\nA × D = " + multAD + "\nB × C = " + multBC + "\nB × D = " + multBD +
    "\nC × D = " + multCD);
