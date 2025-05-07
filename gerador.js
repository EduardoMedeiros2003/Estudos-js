function* gerador1() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}
//A função geradora é como se fosse um palse em etapas do código

const g1 = gerador1();

//console.log(g1.next().value)
//console.log(g1.next().value)
//console.log(g1.next().value)

console.log('Outra forma de ter acesso')
// com este for todos os valores ira aparecer
for (let valor of g1) {
    console.log(valor);
}

function* gerador2() {
    let i = 0;
    //luppen infinito
    while(true) {
        yield i ;
        i++;
    }
}
//O gerador é uma contagem infinita, smepre que tem um novo console chamndo um numero novo sera adicionado 
const g2 = gerador2();
console.log('Contagem')
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('outro metodo de fazer o gerador')
function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4() {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();
for(let valor of g4) {
    console.log(valor);
}

//Uma função dentro do gerador e outra maneira de ter o acesso 
//Se usar o return vai acabar com a função ali mesmo, nao chamndo o resto dela se tiver algo a mais 
function* gerador5() {
    yield function() {
        console.log('vim do y1');
    };

    yield function() {
        console.log('vim do y2');
    };
}

const g5 = gerador5();
console.log('-------------')
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();