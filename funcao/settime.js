function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('PT-BR', {
        hour12: false
    });
    //{ hour12: false } força o formato de 24 horas (se fosse true, ele usaria o formato de 12h com AM/PM).
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer)
}, 3000);

setTimeout(function(){
    console.log('Tenha sonhos,viva eles')
}, 5000)