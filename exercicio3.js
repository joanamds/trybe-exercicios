// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Entrada
let array = ['java', 'javascript', 'python', 'html', 'css']
let biggestWord = array[0];
let smallestWord = array[0];

// Processamento
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}


// Saída 
console.log(biggestWord);
console.log(smallestWord);