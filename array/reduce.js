const numeros = [1, 23, 56, 2, 3, 45, 6, 78, 97, 34, 22, 27 ];

const total = numeros.reduce(function(acumulador, valor,indice, array){
    acumulador += valor;
    return acumulador;
},0 );
//Reduce sempre vai retornara um unico valor. ou seja ira reduzir a um unico valor
console.log(total)

const par = numeros.reduce(function(acumulador, valor,indice, array){

    if(valor % 2 === 0) acumulador.push(valor);
        return acumulador;
        
}, []);
//todos os numeros pares do array, mas não deve ser feito com reduce  e sim com filter 
console.log(par)
    

//retornando a pessoa mais velha
const pessoas = [ 
    {nome:'Eduardo', idade:22},
    {nome:'Lucas', idade:29},
    {nome:'Henrique', idade:23},
    {nome:'Joana', idade:56},
    {nome:'letícia', idade:32},
    {nome:'Rosana', idade:76},
    {nome:'Laura', idade:18}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha);

//tudo de uma unica vez filter, map, reduce

const tudo = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(tudo)
// Numeros pares = [ 56,  2, 6,  78,  34, 22 ]
// Dobrados =      [ 112, 4, 12, 156, 68, 44 ]
// Somados = 396
