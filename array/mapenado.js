//array
//map sempre vai ter o memso tamanho do array original.
//quero dobrar todos os valores 
const numeros = [1, 23, 56, 2, 3, 45, 6, 78, 97, 34, 22, 27 ];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

const pessoas = [ 
    {nome:'Eduardo', idade:22},
    {nome:'Lucas', idade:29},
    {nome:'Henrique', idade:23},
    {nome:'Joana', idade:56},
    {nome:'letícia', idade:32},
    {nome:'Rosana', idade:76},
    {nome:'Laura', idade:18}
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
const idades = pessoas.map(obj => obj.idade);
console.log(idades);
//passando as idades como objeto
const idades1 = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades1);
// adicioando um id para cada obj
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1);
    return newObj;
});
console.log(comIds);



