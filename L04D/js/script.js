let totalGraos = 0;
let graosQuadro = 1;
let quadro = 1;

do {
    totalGraos += graosQuadro;
    graosQuadro *= 2;
    quadro++;
} while (quadro <= 64);

alert("Total de grãos no tabuleiro de xadrez: " + totalGraos);