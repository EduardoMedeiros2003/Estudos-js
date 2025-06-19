//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + '' + this.sobrenome;
};

//instância - Cria novos objetos
const pessoa1 = new Pessoa('Eduardo', 'U'); //<- pessoa = função construtora
const pessoa2 = new Pessoa('Maria', 'E'); //<- pessoa = função construtora

console.log(pessoa1.nomeCompleto)
console.dir(pessoa1);
console.dir(pessoa2);
//pessoa1.prototype === pessoa1.__proto__ 
pessoa1.nomeCompleto()

// __proto__ = Prototipo | primeiro modelo