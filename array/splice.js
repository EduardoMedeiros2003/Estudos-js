//               -5       -4       -3         -2        -1
//                0        1        2          3         4

// nomes.splice(indice atual, delete, elem1, elem2, elem3)
//nuber.max_value é ate o valor maxim
//pop
const pop = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos = pop.splice(-1,1, 'Luiz', 'Soares');
console.log(pop, removidos);
//shift
const shift = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos1 = shift.splice(0,1)
console.log(shift, removidos1);
//push
//adicionando no final do array
const push = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos2 = push.splice(push.length,0, 'Sabrina');
console.log(push, removidos2);

//anshift
const anshift = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = anshift.splice(0,0, 'Laura')
console.log(anshift, removidos3);

