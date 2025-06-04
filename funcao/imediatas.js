// Isto é a representação de uma função imediata, esta função não esta na raiz do codigo, isto sginicfica que se escrever mais linhas a baixo com as mesmas variaveis Não terar diferença 
//IIFE -> Immediately invoked function expression

(function(idade,peso, altura) {
    const sobrenome = 'Medeiros';
    function criarNome(nome) {
        return nome + '' + sobrenome;
    }

    function falaNome () {
        console.log(criarNome('Eduardo '));
    }

    falaNome();
    console.log(idade, peso , altura);
})(21, 80, 1.80);

// afunção tem que estar dendro de () e os dados dela no final dendrio de () de novo