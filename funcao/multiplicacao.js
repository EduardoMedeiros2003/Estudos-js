function criaMultiplicador (multiplicador) {
    // multiplicador, a variavel do criamutiplicador vem pra ca 
    return function(n) {
        return n * multiplicador
    };
}

// estes são os números que vão criar os multiplicadortes
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// estes são os números que vão ser multiplicados 
console.log(duplica(10));
console.log(triplica(30));
console.log(quadriplica(40));

//pode retornar qualquer coisa nas função 