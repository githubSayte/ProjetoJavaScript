/*
Exercício 1: Criação de Objeto Literal
Crie um objeto literal que represente um livro, com 
as propriedades titulo, autor e ano. Em seguida, 
imprima as informações do livro no console.

Exercício 2: Adição de Método
Adicione um método informacoes() ao objeto 
livro que imprima todas as informações do livro, 
incluindo título, autor e ano.

Exercício 3: Lista de Compras
Crie um objeto literal que represente uma 
lista de compras, onde cada item da lista é uma 
propriedade com o nome do item e a quantidade desejada.

Exercício 4: Adição e Remoção de Itens
Adicione métodos ao objeto lista de compras para
 adicionar um novo item à lista e remover um item existente.

Exercício 5: Total da Compra
Adicione um método ao objeto lista de compras para 
calcular o valor total da compra, com base na quantidade
 desejada de cada item e seus preços individuais.

Exercício 6: Registro de Funcionários
Crie um objeto literal que represente um registro de 
funcionários, onde cada funcionário é representado por um 
objeto com propriedades como nome, cargo e salário.

Exercício 7: Adição de Funcionários
Adicione métodos ao objeto registro de funcionários 
para adicionar um novo funcionário ao registro e remover um funcionário existente.

Exercício 8: Aumento de Salário
Adicione um método ao objeto registro de funcionários 
para aumentar o salário de todos os funcionários em uma certa porcentagem.

Exercício 9: Contato
Crie um objeto literal que represente um contato, 
com propriedades como nome, email e telefone.

Exercício 10: Lista de Contatos
Crie um array de objetos literais que representem uma lista 
de contatos. Cada objeto deve ter as mesmas propriedades 
definidas no exercício anterior. Adicione métodos para 
adicionar um novo contato à lista, remover um contato
 existente e buscar um contato pelo nome.
*/
console.log("Exercício 1: Criação de Objeto Literal");

const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  ano: 1954,

  informacoes() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano: ${this.ano}`);
  }
};

// Chamando o método informacoes
livro.informacoes();


console.log("Exercício 2: Adição de Método");
// Chamando o método informacoes para imprimir todas as informações do livro
//livro.informacoes();

for (let chave in livro) {console.log(chave + ': ' + livro[chave]);}

console.log("Exercício 3: Lista de Compras");

const listaDeCompras = {
  itens: {
    Arroz: 1,
    Feijão: 2,
    Carne: 1,
    Leite: 3,
    Pão: 5,
    Ovo: 12  // Ovo já adicionado diretamente na lista
  },
  imprimirLista() {
    console.log(this.itens);
  }
};

// Imprimindo a lista atualizada
listaDeCompras.imprimirLista();

console.log("Exercício 4: Adição e Remoção de Itens")

adicionarItem(item, quantidade) {
  this.itens[item] = (this.itens[item] || 0) + quantidade;
},
removerItem(item) {
  delete this.itens[item];
},
imprimirLista() {
  console.log(this.itens);
}
};

// Adicionando 'Ovo' à lista com quantidade 12
listaDeCompras.adicionarItem('Ovo', 12);
// Removendo 'Carne' da lista
listaDeCompras.removerItem('Carne');
// Imprimindo a lista atualizada
listaDeCompras.imprimirLista();
