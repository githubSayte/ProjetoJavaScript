/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/

let array1 = (1,2,3,4,5);
let array2 = new Array(1,2,3,4,5);
let array3 = [];
//
// array pode conter diferentes tipos de codigos
let array4 = ["hello", 42, true]; 

//acessando o indice do array
let array5 = [10, 20, 30, 40, 50]
console.log(array5[0]);
console.log(array5[2]);

// verificando o tamanho do array
let arraylength = [1,2,3] 
console.log(arraylength.length)

// inserindo um item ao array
arraylength.push (4);
console.log(arraylength); 

removendo um item ao array

let removedElement = arraylength.pop();
console.log(removedElement)
console.log(arraylength);
