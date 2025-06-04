function random(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;

let rand = random(1, 50);

// Usar o while quando não sabe quando vai terminar, pra quiando for a primeira vez falso ele sai do laço de repetição
while (rand !== 20) {
    rand = random(min, max);
    console.log(rand);
}
// O do while vai executar primeiro o codigo e depois vai ver a circustancia de parar o codigo, ai esta um laço infinito
do {
    console.log(rand)
} while(rand !== 10);