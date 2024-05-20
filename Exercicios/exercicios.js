
//Exercício 1: Criação de Classe
//Crie uma classe Pessoa com as propriedades nome e idade. Em seguida, crie dois objetos pessoa1 e pessoa2 dessa classe e imprima suas informações no console.
//Exercício 2: Adição de Método
//Adicione um método cumprimentar() à classe Pessoa, que imprime uma saudação usando o nome da pessoa. Chame o método cumprimentar() para os objetos pessoa1 e pessoa2 criados no exercício anterior.
//Exercício 3: Herança
//Crie uma classe Aluno que herda da classe Pessoa e adiciona uma propriedade curso. Crie um objeto aluno1 dessa classe e imprima suas informações no console.
//Exercício 4: Sobrescrita de Método
//Na classe Aluno, sobrescreva o método cumprimentar() para incluir uma mensagem específica para alunos. Chame o método cumprimentar() para o objeto aluno1.


/* 

    Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
    mensagem com o nome e a idade da pessoa.;


    Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
    perímetro do retângulo.

    Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e
    verificar o saldo.:?

    Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
    o valor total do produto (preço * quantidade).

    Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as
    informações do carro.

    Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para
    calcular a média das notas.

*/
// Exercício 1 e 2: Criação de Classe e Adição de Método
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar() {
    console.log(`Bom dia ${this.nome}!`);
  }

  apresentar() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

console.log(`Pessoa 1: ${pessoa1.nome}, ${pessoa1.idade} anos`);
console.log(`Pessoa 2: ${pessoa2.nome}, ${pessoa2.idade} anos`);

pessoa1.cumprimentar();
pessoa2.cumprimentar();
pessoa1.apresentar();
pessoa2.apresentar();

// Exercício 3 e 4: Herança e Sobrescrita de Método
class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  cumprimentar() {
    console.log(`Bom dia ${this.nome}! Meu caro aluno do curso de ${this.curso}`);
  }
}

const aluno1 = new Aluno('Lucas', 20, 'técnico em informática');
aluno1.cumprimentar();
aluno1.apresentar(); // Para exibir nome e idade

// Classe Retangulo
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  get area() {
    return this.largura * this.altura;
  }

  get perimetro() {
    return 2 * (this.largura + this.altura);
  }
}

const ret = new Retangulo(5, 12);
console.log(`A área do retângulo é ${ret.area} e o seu perímetro é ${ret.perimetro}`);

// Classe ContaBancaria
class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso.`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    } else {
      console.log('Saldo insuficiente para o saque.');
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

const contaDoJoao = new ContaBancaria('João', 100);
contaDoJoao.depositar(50);
contaDoJoao.sacar(20);
contaDoJoao.verificarSaldo();

// Classe Produto
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotal() {
    return this.preco * this.quantidade;
  }
}

const totalApagar = new Produto('Frutas', 1, 10);
console.log(`O valor total é R$${totalApagar.valorTotal()}`);
const produto1 = new Produto('Caderno', 10, 3);
console.log(`Valor total do produto: R$${produto1.valorTotal()}`);

// Classe Carro
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInformacoes() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
  }
}

const carro1 = new Carro('Toyota', 'Corolla', 2024);
carro1.exibirInformacoes();
const carro2 = new Carro('Honda', 'Civic', 2024);
carro2.exibirInformacoes();

// Classe Aluno
class Aluno2 {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calcularMedia() {
    const soma = this.notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
    return soma / this.notas.length;
  }
}

const aluno2 = new Aluno2('Ana', '123456', [8, 9, 7]);
console.log(`Média das notas: ${aluno2.calcularMedia()}`);
