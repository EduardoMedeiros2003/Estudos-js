// Declaração de função (Function hoisting): siginifica que pode chamara função antes mesmo de criar ela
falaOi();
function falaOi() {
    console.log('opa');
};

//First-class objects (Objetos de primmeira classe)DADOS, pode passar como um dado
//Function expression : uma função pode ser uma variavel ou costante

const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('vou executar a função que esta chamando a baixo:')
    funcao();
};

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma função arrow')
}
funcaoArrow();

// Dentro de um objeto
// Para puxar um objeto tem que puxar o nome da sua variavel
const obj = {
    
    falar() {
        console.log('Estou falando em um objeto de fala');
    }
}
obj.falar();

//Parâmetros das funçãos 
//Parâmetro é o que fica na frente da funcao()
//argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);
// temm como passar o valor pelo parametro
function conta(a, b= 2, c=9){
    console.log(a + b + c);
}
conta(2, undefined, 20)

function objeto([valor1, valor2, idade]) {
    console.log(valor1, valor2, idade);
}
objeto(['Eduardo Umbelino', 'Medeiros', 21]);

function matematica(operador, acumulador, ...numeros ){
    for(let numero of numeros) {
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
matematica('+', 0, 20, 30, 40, 50, 60)