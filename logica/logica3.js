// Escreva uma funcao que receba um numero e retorne o seguinte:
//numero e divisivel por 3 = fizz
//numero divisivel por 5 = buzz
//numero divisivel por 3 e 5 = fizzbuzz
//numero nao e divisivel por 3 e 5 = retorna o propio numero
//checar se o numero e realmente um numero = retorna o propio numero
//usar a funcao com numeros de 0 a 100

//se tem uma condiçao que olha duas coisas ela tem que ir primeiro para que o sistema leia ele antes das demais 
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';// se com 3 e 5 o resto é 0 entao é divisivel pelos dois numeros
    if (numero % 3 === 0) return 'Fizz';// se na divisao de 3 o resto é 0 entao é divisivel
    if (numero % 5 === 0) return 'Buzz'; // se na divisao de 5 o reto é 0 entao é divisivel
    return numero;// assim que comfere se o numero é divisivel ou nao por um numero 
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}// metodo para aumentar um numero de 0 a 100


//outra aula foi falando sobre como lidar com os erros no caso colocar uma outra mensagem se der algo errado no codigo. ja tinha feito algo assim no curso de py pela alura olhar o codigo de la
