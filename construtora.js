//Função costrutora -> Objetos
//Função fabrica -> Objetos
//Construtora -> Pessoa(new)| Não usa o CaMelCaze

function Pessoa (nome, sobrenome, idade) {
    //Atributos ou métodos privados
    const id = 133245;
    const metodoInterno = function() {
        console.log(id)
    };

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.metodo = function() {
        console.log(this.nome +': Metodo de falar');
    };
}

const p1 = new Pessoa('Eduardo', 'Medeiros', 21);
const p2 = new Pessoa('Lucas', 'Tabosa', 29);
//new = cria objeto vazil e coloca no this e ja esta retornando na variavel

console.log(p1.nome, p1.sobrenome, p1.idade);
console.log(p2.nome, p2.sobrenome, p2.idade);
p1.metodo();