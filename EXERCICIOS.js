const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

//Exercicio 1
const nomes = produtos.map(produto => produto.nome.toUpperCase());

console.log(nomes);


//Exercicio 2

const produtosDesconto = produtos.map((produto) => {
    return {
        ...produto,
        preco: produto.preco * 0.9,
    };
});

console.log(produtosDesconto);

//Exercicio 3

const produtosAtivos = produtos.filter((produto) => produto.ativo === true);

console.log(produtosAtivos);


//Exercicio 4
const produtosDisponiveis = produtos.filter((produto) => {
    return produto.estoque > 0 && produto.preco > 100;
});

console.log(produtosDisponiveis);

//Exercicio 5

const produtoId3 = produtos.find((produto) => produto.id === 3);

console.log(produtoId3);


//Exercicio 6
const produtoEstoqueZerado = produtos.find((produto) => produto.estoque === 0);

console.log(produtoEstoqueZerado);


//Exercicio 7
const indiceMonitor = produtos.findIndex((produto) => produto.nome === 'Monitor');

console.log(indiceMonitor);


//Exercicio 8
const indiceInativo = produtos.findIndex((produto) => produto.ativo === false);

console.log(indiceInativo);

//Exercicio 9
const total = produtos.reduce((soma, produto) => {
    return soma + produto.estoque;
}, 0);

console.log(total);


//Exercicio 10
const patrimonio = produtos.reduce((soma, produto) => {
    return soma + produto.preco * produto.estoque;
}, 0);

console.log(patrimonio);


//Exercicio 11
const existePrecoMaior = produtos.some((produto) => produto.preco > 3000);

console.log(existePrecoMaior);


//Exercicio 12
const existeInativo = produtos.some((produto) => produto.ativo === false);

console.log(existeInativo);


//Exercicio 13
const resultadoPreco = produtos.every((produto) => produto.preco > 50);

console.log(resultadoPreco);

//Exercicio 14
const resultadoEstoque = produtos.every((produto) => produto.estoque > 0);

console.log(resultadoEstoque);
