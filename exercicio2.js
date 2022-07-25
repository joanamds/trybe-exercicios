// Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// Entrada
let word = 'trybe'; 
let drow = '';

// Processamento 
for (let index = 0; index < word.length; index += 1) {
    drow += word[word.length - 1 - index];
}

// Saída
console.log(drow);