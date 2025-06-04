//Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, autura, peso) {
    //this chama o objeto inteiro da função, mas o this pode chamar outras coisas do codigo, pode ser ate umm clik
    //tudo dentro do objeto tem que ser separado por virgula menos a ultima
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: autura,
        peso: peso,
        //Getter: get imc, fez ele pensar ser ummma string e não uma função, para obter o valor
        get imc() {
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }
    };
}
//p1 sempre vai ser a mesma pessoa criada, podendo ser chamada desta maneira 
const p1 = criaPessoa('Eduardo', 'Medeiros', 1.8, 80 );
console.log(p1.fala('falando sobre js'));
p1.nomeCompleto = 'Eduardo Umbelino Gonçalves Tabosa Medeiros';
console.log(p1.nomeCompleto);
console.log(p1.nome, p1.sobrenome, p1.altura, p1.peso);
console.log(p1.imc);

const p2 = criaPessoa('Joana', 'Aninha', 1.6, 68);
console.log(p2.fala('falando sobre as aulas que anda tendo'));
p2.nomeCompleto = 'Joana Melo Aninha da silva'
console.log(p2.nomeCompleto);
console.log(p2.nome, p2.sobrenome, p2.altura, p2.peso);
console.log(p2.imc);