//Valor por referencia
//                 0           1          2           3          4
const nomes = ['Eduardo', 'Umbelino', 'Gnçalves', 'Tabosa', 'Medeiros'];
const novo = [...nomes];
//Slice fatia o array e puxa so os indicis indicados
const novos = nomes.slice(0,-1);

console.log(novos);

//pop remove o elemento do final do array e pode ser uma variavel que ira remover e chmar 
novo.pop();
//push = Adiciona um elemento novo no final do array
nomes.push('João');
//unshift ira adicionar um novo elemento no inicio do array, que no exmplo esta sendo deletado e entrando na variavel
nomes.unshift('Carlos');
//shift vai remover o primeiro elemento do array- demostrando ele em uma variavel agora
const removidos = nomes.shift();
console.log(nomes, removidos);
// o que faz em novo não reflete em nomes 
console.log(novo);
//qualo o tamanho do array, é um metodo por isso não usa '' - tem 3 elementros
console.log(nomes.length);

const string = 'Carlos Eduardo Tabosa Medeiros';
//trasformando uma string em uma array com o split e mostrando como cada elemento esta sendo dividido
const strings = string.split(' ');
console.log(strings);

//trasformando um array em uma string 
const strng1 = nomes.join(' ');
console.log(strng1)

//arry de numeros 
console.log('Numeros nos arrays');

const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1.concat(a2, [7,8,9], 'Numeros dos arrays')
console.log(a3);
console.log('outro método');
const a4 = [...a1, ...a2, ...[7,8,9], 'Outra forma de fazer a junção dos arrays']
console.log(a4);