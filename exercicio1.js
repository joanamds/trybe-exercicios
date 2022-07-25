// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// Entrada 
let fatorial = 1; 

// Processamento
for (let index = 10; index > 0; index -= 1) {
        fatorial *= index;
} 

//Saída
console.log(fatorial);


