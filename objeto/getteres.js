//defineProperty -> Getter e Setters
//função cosntrutora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,// mostra a chave
        configurable: false, // configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new Error("Não foi um valor valido : numero");
            }

            estoquePrivado = valor;
        }
    });
}

//faction function
function criaProduto(nome){
    return{
        get nome() {
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}


const p1 = new Produto('Celular', 3500,234);
p1.estoque =  300;
console.log(p1);
console.log(p1.estoque);
const p2 = criaProduto('Camiseta')
console.log(p2.nome);
