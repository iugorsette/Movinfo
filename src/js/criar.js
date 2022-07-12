function criarFilmesLancamentos(filmes) {
    let dataAtual = new Date() //esse aqui pega data atual
    let anoAtual = dataAtual.getFullYear() //pegou o ano atual da data
    let filmesLancamentos = [] //lista de filmes lançamentos
    for (filme of filmes) { //percorre a lista de filmes
        if (filme.ano >= anoAtual - 1) { //criando condição 
            filmesLancamentos[filmesLancamentos.length] = filme //ele esta adicionando o filme na lista dos filmes lançamentos
        }
    }
    filmesLancamentos.sort()//ordenados dos mais recentes 
}

function criarFilmesRecomendados(filmes, usuario) {
    let personalidadesDoUsuario = usuario.personalidades //Pegar a personalidade do usuario   
    let filmesRecomendados = []
    for (let vez = 1; vez <= 10; vez++) {
        let index = Math.random() // Pega um número aleatório para ser usado como indice
        let filme = filmes[index] // Pega o filme na lista de filmes de acordo com o indice
        filmesRecomendados[filmesRecomendados.length] = filme //ele esta adicionando o filme na lista dos filmes lançamentos
    }
    /*
    for (filme of filmes) {
        for (personalidade of personalidadesDoUsuario) {
            switch (personalidade) {
                case "Extrovertido":
                    if (filme.categoria == "Comédia" || filme.categoria == "Ação") {
                        filmesRecomendados[filmesRecomendados.length] = filme;
                    }
                    break;
                    
                case "Intuitivos":
                    filmesRecomendados[filmesRecomendados.length] = filme;
                    break;
                case "Sentimentais":
                    filmesRecomendados[filmesRecomendados.length] = filme;
                    break;
                case "Julgadores":
                    filmesRecomendados[filmesRecomendados.length] = filme;
                    break;
            }
        }
    }*/
}

function criarFilmesMaisAmados(filmes) {
    let filmesMaisAmados = [] // lista de filmes mais amados
    for (filme of filmes) {  // percorre a lista de filmes
        if (filme.mediaAvaliacao > 4) {  // verifica a media de avaliação
            filmesMaisAmados[filmesMaisAmados.length] = filme //adiciona o filme na lista de filmes mais amados
        }
    }
    filmesMaisAmados.sort() //ordena os filmes dos mais bem avaliados
}

function criarFilmesMaisAclamados(filmes) {

}

function criarFilmesRecordeBilheteria(filmes) {
    let recordesDeBilheteria = filmes.sort() // ordenados dos filmes q tiveram mais bilheteria 

}