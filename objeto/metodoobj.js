//Copiando um objeto, adicionando umnovo atributo
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,
     material: 'porcelana'
};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'aqui pode mudar o valor e não mudarar depois'
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));// ver as propiedades do objeto

Object.freeze(produto);//vai trancar para não ser modificado

caneca.nome = 'outro nome';
caneca.preco = 2.7;
console.log(Object.values(produto));// vai pegar os valores sem as {} com []
console.log(produto);
console.log(caneca);

for(let entry of Object.entries(produto)) {
    console.log(entry);
}