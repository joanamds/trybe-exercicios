let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;

for (let index = 0; index < numbers.length; index += 1) { 
    soma += numbers[index];
    media = soma / numbers.length;
}

console.log(media);