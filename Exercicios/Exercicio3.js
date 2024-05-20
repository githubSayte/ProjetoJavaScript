console.log("exercicio 1. Variáveis")

let x = 10; // Exemplo de valor inicial para x
let y = 20; // Exemplo de valor inicial para y

function trocarValores() {
  let aux = x;
  x = y;
  y = aux;
}

console.log(`Antes da troca: x = ${x}, y = ${y}`);
trocarValores();
console.log(`Depois da troca: x = ${x}, y = ${y}`);

console.log("exercicio 2. Tipo Primitivo")

const Primitivo = 
{
 Number: 2024,
 String: "Texto",
 boolean: true,
};

for (let chave in Primitivo) {console.log(chave + ': ' + Primitivo[chave]);}

console.log("Exercício 3. Concatenar String")

let result = " Pra Vencer, " + "Tem que lutar!";
console.log(result);

console.log("Exercício 4. Number")

var num = 10

console.log("O resultado da multiplicação é:", num * 3);

console.log("Exercício 5. Operadores Aritméticos")

function calcular() {
   
   console.log("O resultado da soma é: ", 10 + 5 -3 )
}

calcular()

console.log("O resultado da soma é: ", 10 + 5 -3 )


console.log("Exercício 6. Operadores de Atribuição")

let x1 = 20;
x1 -= 5; 
console.log(x1);

console.log("Exercício 7. Operadores Relacionais");

let a = 5;
let b = 3;

if (a > b) {
  console.log("a é maior que b");
} else {
  console.log("a é menor que b");
}

var x3 = 6
var y3  = 14
if ((x3> 5) &&  (y3< 15)){
   console.log(true)
}
else{
console.log(false)

}

console.log("Exercício 8. Operadores Lógicos");

if ((x4=10)>5 && (y4=10)<15)
console.log(true)
else
console.log(false)

console.log("Exercício 9. Array")

let arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // Isso irá imprimir o valor 3, que é o terceiro elemento do array.

console.log("Exercício 10. Laços de Repetição For")

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Exercício 11. Laços de Repetição While")

let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

console.log("Exercício 12. Laços de Repetição Do While");

let i1 = 1;
do {
  console.log(i1);
  i1++; // Incrementa i1, não i
} while (i1 <= 3);

console.log("Exercício 13. Estrutura de Decisão")

let num1 = 10; 

if (num1 % 2 === 0) {
    console.log(num1 + " é par");
} else {
    console.log(num1 + " é ímpar");
}

console.log("Exercício 14. Foreach")

let arr1 = [1, 2, 3];
arr1.forEach(function(item) {
  console.log(item * 3);
});

console.log("Exercício 15. Switch Case");

let numeroDoMes = 5;
switch (numeroDoMes) {
  case 1:
    console.log("O mês escolhido é Janeiro");
    break;
  case 2:
    console.log("O mês escolhido é Fevereiro");
    break;
  case 3:
    console.log("O mês escolhido é Março");
    break;
  case 4:
    console.log("O mês escolhido é Abril");
    break;
  case 5:
    console.log("O mês escolhido é Maio");
    break;
  case 6:
    console.log("O mês escolhido é Junho");
    break;
  case 7:
    console.log("O mês escolhido é Julho");
    break;
  case 8:
    console.log("O mês escolhido é Agosto");
    break;
  case 9:
    console.log("O mês escolhido é Setembro");
    break;
  case 10:
    console.log("O mês escolhido é Outubro");
    break;
  case 11:
    console.log("O mês escolhido é Novembro");
    break;
  case 12:
    console.log("O mês escolhido é Dezembro");
    break;
  default:
    console.log("Mês inválido");
}

  console.log("Exercício 16. Objetos e Classes");

class Pessoa 
{
  constructor(nome, idade) 
  {
    this.nome = nome;
    this.idade = idade;

    
  }
}
    let pessoa = new Pessoa("João", 30);
    console.log(pessoa.nome);  // João
    console.log(pessoa.idade); // 30


console.log("Exercício 17. Orientação a Objeto");

class Carro {
  constructor(marca) {
    this.marca = marca;
  }

  andar() {
    console.log(`${this.marca} está andando.`);
  }
}

let meuCarro = new Carro("Toyota");
meuCarro.andar(); // Toyota está andando.

console.log("Exercício 18. Objeto Literal");

let pessoa1 = {
  nome: "Maria",
  idade: 25
};

console.log(pessoa1.nome);  // Maria
console.log(pessoa1.idade); // 25


console.log("Exercício 19. Função");

function soma(a, b) {
  return a + b;
}

// Chamar a função e imprimir o resultado
let resultado = soma(5, 3);
console.log(resultado); // Saída: 8

console.log("Exercício 20. Objeto de Função");

function Animal(tipo) {
  this.tipo = tipo;
}


let meuAnimal = new Animal("Mamífero");

console.log(meuAnimal.tipo); 