

const joao: { nome: string, idade: number, profissao: string } = {
    nome: 'joao',
    idade: 58,
    profissao: 'pintor'
}

const ana: { nome: string, idade: number, profissao: string } = {
    nome: 'ana',
    idade: 28,
    profissao: 'dev'
}

enum Profissao {
    Professor,
    Ator,
    Desenvolvedor,
    Cozinheiro
}

interface Estudante extends Pessoa{
    materias:string[]
}


interface Pessoa {
    nome: string, 
    idade: number, 
    profissao: Profissao
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade:18,
    profissao: Profissao.Atriz
}

const jessica: Estudante = {
    nome: "Vanessa",
    idade:18,
    profissao: Profissao.Desenvolvedora,
    materias:["Algoritimos",'Extrutura de dados']
}

function listar(lista: string[]){
    for (const i of lista){
        console.log(" - ", i);
    }
}

listar(jessica.materias)