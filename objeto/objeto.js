const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Medeiros',
    idade: 22
};
//console.log(pessoa['nome']); // funciona igualmente
//console.log(pessoa.sobrenome);
//console.log(pessoa.idade);
const chave = 'nome'; // metodo valido para usar as [] q chama a constant
//console.log(pessoa[chave]);

const pessoa1 = new Object(); // modelo de objeto construtor 
pessoa1.nome = 'Umbelino';
pessoa1.sobrenome= 'Gonçalves';
pessoa1.idade= 22
//console.log(pessoa1.nome, pessoa1.sobrenome);

pessoa1.falanome = function() {
    return(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date(); // pegando a data atual 
    return dataAtual.getFullYear() - this.idade; // pegano o ano atual pela dataAtual e diminuindo a qauntidade da idade
};// quando uma função esta dentro de um objeto, ele vira um metodo
console.log(pessoa1.getDataNascimento());
for(let chave in pessoa1){
    //console.log(chave);
    //console.log(pessoa1[chave]);
};

// Factort Function fabrica
function criaPessoas(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoas('Carlos', 'Lucas');
console.log(p1.nomeCompleto());

// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome= nome;
    this.sobrenome = sobrenome;
    //return this; {}<- this -> this 

    Object.freeze(this); // assim é impossivel mudar o valor dos p2,p3
}
// new cria {}<- this - atrela this ao objeto dentro da funçaão
// com o this é possivel fazer a fabrica, neste caso nomes de pessoas com sobrenome
const p2 = new Pessoa('Julia', 'Padilha');//mesma coisa que um objeto literal, mesmo sendo uma função que chama

const p3 = new Pessoa('Eduarda', 'Medeiros');
console.log(p2)
console.log(p3)
