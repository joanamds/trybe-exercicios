// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = numbers[0]; 
let index = 0; 

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
        biggestNumber = numbers[index];
    }
} 

console.log (biggestNumber);
