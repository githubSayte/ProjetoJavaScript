/*
1-Crie uma função chamada soma que aceita dois parâmetros e retorna a soma deles.

2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e não tem nenhum parâmetro nem retorno.

3-Escreva uma função chamada verificarPar que recebe um número como parâmetro e retorna verdadeiro se o número for par e falso caso contrário.

4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo como parâmetro e retorna a área do círculo.

5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro e retorna a data atual.

6-Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.

7-Crie uma função chamada adicionarDois que aceita um número como parâmetro e retorna esse número adicionado a 2.

8-Defina uma função chamada concatenarStrings que recebe duas strings como parâmetros e retorna uma nova string que é a concatenação das duas strings fornecidas.

9-Escreva uma função chamada verificarNegativo que recebe um número como parâmetro e retorna verdadeiro se o número for negativo e falso caso contrário.

10-Crie uma função chamada removerEspacos que recebe uma string como parâmetro e retorna a mesma string sem espaços em branco.
*/


function soma(a, b) {
    return a + b;
}

let resultado1 = soma(3, 5); // Chamada da função e atribuição do resultado a uma variável
console.log("(1)A soma de a mais b e:", resultado1); // Saída: 8

function saudacao() {
    console.log("(2)Olá, mundo!");
}

saudacao(); // Chamada da função

function verificarPar() {
    let numero = 5; // Variável local da função
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }

}
console.log("(3)O número é par:", verificarPar());
//console.log("(3)O número é par:",verificarPar(5)); // Saída: false  

function calcularAreaCirculo() {
    let raio = 5; // Variável local da função
    return Math.PI * Math.pow(raio, 2);
}
console.log("(4)A área do círculo é:", calcularAreaCirculo()); // Saída: 78.539816339


function retornarDataAtual() {
    let dataAtual = new Date();
    return dataAtual;
}

console.log('(5) A data atual é:', retornarDataAtual());

function calcularMedia() {
    let nota1 = 10;
    let nota2 = 8;
    let media = (nota1 + nota2) / 2;
    return media;
}
console.log('(6) A média das notas é:', calcularMedia());

function adicionarDois() {
    let a = 8;
    let b = 2;
    let resultado = a + b;
    return resultado;
}
console.log('(7) Adicionando dois o resultado é:', adicionarDois());

    function concatenarStrings() {
        let nome = "Renato";
        let sobrenome = "Resende";
        let nomeCompleto = nome + " " + sobrenome;
        return nomeCompleto;
        }
        console.log('(8) O nome completo é:', concatenarStrings());

function verificarNegativo() {
    let numero = -5;
    if (numero < 0) {
        return "Verdadeiro";
        } else
        return "Falso";
        }
        console.log('(9) O número é negativo:', verificarNegativo());


function removerEspacos () {
    let frase = "   Renato         Resende   ";
    let fraseSemEspacos = frase.replace(/\s+/g, '');;
    return fraseSemEspacos;
    }
    console.log('(10) A frase sem espaços é:', removerEspacos());

   
    //end{code}
    
        