//Produto -> aumento, desconto
//Camiseta = Cor, Caneca = material
//criando a função cosntrutora Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
// criando a funcao cosntrutora Camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco,);// aqui esta pegando a herança de Produto
    this.cor = cor
}
// criando a funcao cosntrutora Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this,nome,preco); // aqui esta pegando a herança de Produto
    this.material = material;
    this.estoque = estoque;
}

Camiseta.prototype = Object.create(Produto.prototype);  // colocando a camiseta no protortpe do produto
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('carro', 999)
const camiseta = new Camiseta('Regata', 10, 'Preta');
const caneca = new Caneca('dias das mães', 25,'ceramica', 100)

console.log(produto);
console.log(camiseta);
console.log(caneca);