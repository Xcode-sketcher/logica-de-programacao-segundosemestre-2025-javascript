function obterNumero(mensagem) {
    let numero;
    do {
        numero = parseInt(prompt(mensagem));
        if (isNaN(numero)) {
            alert("Por favor, digite um número válido!");
        }
    } while (isNaN(numero));
    return numero;
}

console.log("=== Exercício L01G - Propriedade Distributiva ===");

let A = obterNumero("Digite o primeiro número (A):");
let B = obterNumero("Digite o segundo número (B):");
let C = obterNumero("Digite o terceiro número (C):");
let D = obterNumero("Digite o quarto número (D):");

console.log(`\nNúmeros informados:`);
console.log(`A = ${A}`);
console.log(`B = ${B}`);
console.log(`C = ${C}`);
console.log(`D = ${D}`);


console.log("\n=== OPERAÇÕES DE ADIÇÃO ===");
let somaAB = A + B;
let somaAC = A + C;
let somaAD = A + D;
let somaBC = B + C;
let somaBD = B + D;
let somaCD = C + D;

console.log(`A + B = ${A} + ${B} = ${somaAB}`);
console.log(`A + C = ${A} + ${C} = ${somaAC}`);
console.log(`A + D = ${A} + ${D} = ${somaAD}`);
console.log(`B + C = ${B} + ${C} = ${somaBC}`);
console.log(`B + D = ${B} + ${D} = ${somaBD}`);
console.log(`C + D = ${C} + ${D} = ${somaCD}`);


console.log("\n=== OPERAÇÕES DE MULTIPLICAÇÃO ===");
let multAB = A * B;
let multAC = A * C;
let multAD = A * D;
let multBC = B * C;
let multBD = B * D;
let multCD = C * D;

console.log(`A × B = ${A} × ${B} = ${multAB}`);
console.log(`A × C = ${A} × ${C} = ${multAC}`);
console.log(`A × D = ${A} × ${D} = ${multAD}`);
console.log(`B × C = ${B} × ${C} = ${multBC}`);
console.log(`B × D = ${B} × ${D} = ${multBD}`);
console.log(`C × D = ${C} × ${D} = ${multCD}`);


document.body.innerHTML = `
    <h1>Exercício L01G - Propriedade Distributiva</h1>
    <h2>Números informados:</h2>
    <p><strong>A = ${A}, B = ${B}, C = ${C}, D = ${D}</strong></p>
    
    <h2>Operações de Adição:</h2>
    <ul>
        <li>A + B = ${A} + ${B} = <strong>${somaAB}</strong></li>
        <li>A + C = ${A} + ${C} = <strong>${somaAC}</strong></li>
        <li>A + D = ${A} + ${D} = <strong>${somaAD}</strong></li>
        <li>B + C = ${B} + ${C} = <strong>${somaBC}</strong></li>
        <li>B + D = ${B} + ${D} = <strong>${somaBD}</strong></li>
        <li>C + D = ${C} + ${D} = <strong>${somaCD}</strong></li>
    </ul>
    
    <h2>Operações de Multiplicação:</h2>
    <ul>
        <li>A × B = ${A} × ${B} = <strong>${multAB}</strong></li>
        <li>A × C = ${A} × ${C} = <strong>${multAC}</strong></li>
        <li>A × D = ${A} × ${D} = <strong>${multAD}</strong></li>
        <li>B × C = ${B} × ${C} = <strong>${multBC}</strong></li>
        <li>B × D = ${B} × ${D} = <strong>${multBD}</strong></li>
        <li>C × D = ${C} × ${D} = <strong>${multCD}</strong></li>
    </ul>
    
    <h2>Resumo dos Resultados:</h2>
    <p>Foram realizadas <strong>6 operações de adição</strong> e <strong>6 operações de multiplicação</strong>, 
    totalizando <strong>12 resultados</strong> conforme solicitado no exercício.</p>
    
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            background-color: #f5f5f5; 
        }
        h1 { color: #2c3e50; text-align: center; }
        h2 { color: #34495e; border-bottom: 2px solid #3498db; padding-bottom: 5px; }
        ul { list-style-type: none; padding: 0; }
        li { 
            background: white; 
            margin: 5px 0; 
            padding: 10px; 
            border-left: 4px solid #3498db; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        p { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        strong { color: #e74c3c; }
    </style>
`;

console.log("\n=== RESUMO ===");
console.log("Foram realizadas 6 operações de adição e 6 operações de multiplicação.");
console.log("Total de 12 resultados apresentados conforme solicitado no exercício.");
