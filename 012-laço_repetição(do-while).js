//Do-while
let i = 0;
do {
    console.log(i);
    i++;
} while(i <= 5);

const frutas = ['maçã', 'banana', 'laranja', 'pera', 'melância'];
let j = 0;
do {
    console.log('Eu gosto de ' + frutas[j]);
    j++;
} while (j < frutas.length);

let k = 0;
do {
    if (k === 5) {
        break;
    }
    console.log(k);
    k++;
} while (k < 10);