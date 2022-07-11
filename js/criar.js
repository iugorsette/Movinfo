function criarFilmesLancamentos(filmes){
    let dataAtual = new Date() //esse aqui pega data atual
    let anoAtual = dataAtual.getFullYear() //pegou o ano atual da data
    let filmesLancamentos = [] //lista de filmes lançamentos
    for (filme of filmes){ //percorre a lista de filmes
        if (filme.ano >= anoAtual-1){ 
            filmesLancamentos[filmesLancamentos.length]=filme
        }
    }
}

function criarFilmesRecomendados(filmes){

}

function criarFilmesMaisAmados(filmes){

}

function criarFilmesMaisAclamados(filmes){

}
function criarFilmesRecordeBilheteria(filmes){

}