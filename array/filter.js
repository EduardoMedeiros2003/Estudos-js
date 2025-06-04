//arrays
//Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
//retornando os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 56, 15, 27, 22];

const numerosFiltrados = numeros.filter(valor => valor > 10 );

console.log(numerosFiltrados);

const pessoas = [ 
    {nome:'Eduardo', idade:21},
    {nome:'Lucas', idade:29},
    {nome:'Henrique', idade:23},
    {nome:'Joana', idade:56},
    {nome:'letícia', idade:32},
    {nome:'Rosana', idade:76},
    {nome:'Laura', idade:18}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasComMaisIdade = pessoas.filter(obj => obj.idade >= 30);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisIdade);
console.log(nomeTerminaComA);