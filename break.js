const numeros = [1,2,3,4,5,6,7,8,9]
//Continue continua para próxima interação
// Break sai do laço

for (let numero of numeros){
    //isso vai fazer o 2 ser pulado e não aparecer
    if (numero === 2){
        console.log('Pulando o 2')
        continue;
    }

    console.log(numero);

    if(numero === 7){
        console.log('saindo do laço de interação')
        break;
    }
    
}
// Lembrar de sempre atualizar a variavel de controle antes das palavras continue e break
//continue pula para a proxima interação do laço e vai ate o final
//O break vai para o laço de repetição ali mesmo melhorrando o desempenho
