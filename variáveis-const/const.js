const nameUser = "HiagoSilva";
const passwordUser = "senha123";
const comfirmPasswordUser = "senha123";

const comparePassword = () => {

    let result;
    const compare = passwordUser === comfirmPasswordUser;

    if (!compare) {
      result = "Senhas não são iguais";
    } else {
       result =  "Tudo ok";
    }

    return result;

}

console.log(comparePassword());




function aluno (nome, n1, n2) {

        this.nome = nome,
        this.nota1 = n1,
        this.nota2 = n2

        this.media = function () {
            return (this.nota1 + this.nota2) / 2;
        }
    
        console.log(`O aluno ${this.nome} tirou as notas ${this.nota1} | ${this.nota2}`)

}

let turma = [
    new aluno("Hiago", 8, 9),
    new aluno("Luiz", 10, 91),
    new aluno("Igor", 7, 5)
]

