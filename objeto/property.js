// defineProperty - defineProperties -> trancar um sem mudar, maia de um sem mudar
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,// mostra a chave
        value: estoque,// valor
        writable: false, // pode alterar o valor ou não
        configurable: false // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 5);
console.log(p1);
console.log(Object.keys(p1));

function Carro(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,// mostra a chave
        value: estoque,// valor
        writable: false, // pode alterar o valor ou não
        configurable: false // configurável
    });

    Object.defineProperties(this, {
        nome:{
            enumerable: true,// mostra a chave
            value: nome,// valor
            writable: true, // pode alterar o valor ou não
            configurable: true // configurável
        },
        preco:{
            enumerable: true,// mostra a chave
            value: preco,// valor
            writable: true, // pode alterar o valor ou não
            configurable: true // configurável
        },
    });
}

const p2 = new Carro('Corola', 90000, 5);
console.log(p2);
console.log(Object.keys(p2));