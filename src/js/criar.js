function criarFilmesLancamentos(filmes) {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear() // Pega o ano atual da data
    let mesAtual = dataAtual.getMonth()
    let listaFilmesLancamentos = []
    for (filme of filmes) { // Percorre a lista de filmes
        if (filme.ano > anoAtual-1) { // Verifica se o ano do filme é maior ao ano passado
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
        else if (filme.ano == anoAtual-1 && filme.mes+mesAtual < 12) { // Verifica se o ano do filme é igual ao ano passado, e se a soma dos meses for menor que 1 ano
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
    }
    listaFilmesLancamentos.sort() // Ordena dos mais recentes 
}

function criarFilmesRecomendados(filmes, usuario) {
    //let personalidadesDoUsuario = usuario.personalidades // Pega a personalidade do usuário   
    let filmesRecomendados = []
    for (let vez = 1; vez <= 10; vez++) { // Conta a vez que está repetindo até 10
        let index = Math.random() // Pega um número aleatório para ser usado como indice
        let filme = filmes[index] // Pega o filme na lista de filmes de acordo com o indice
        filmesRecomendados[filmesRecomendados.length] = filme // Adiciona o filme na lista dos filmes recomendados
    }
    /*                          Tentativa de Raciocínio
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
    let listaFilmesMaisAmados = []
    for (filme of filmes) {  // Percorre a lista de filmes
        if (filme.mediaAvaliacao > 4) {
            listaFilmesMaisAmados[listaFilmesMaisAmados.length] = filme // Adiciona o filme na lista de filmes mais amados
        }
    }
    listaFilmesMaisAmados.sort() // Ordena os filmes dos mais bem avaliados
}

function criarFilmesMaisAclamados(filmes) {
    let filmesMaisAclamados = []
    for (filme of filmes) { // Percorre a lista de filmes
        if (filme.criticas.length > 4) { // Verifica se o número de críticas é maior que 4
            filmesMaisAclamados[filmesMaisAclamados.length] = filme // Adiciona o filme na lista de filmes mais aclamados
        }
    }
    filmesMaisAclamados.sort() // Ordena os filmes pelos mais aclamados
}

function criarFilmesRecordeBilheteria(filmes) {
    let recordesDeBilheteria = filmes.sort() // Ordena dos filmes q tiveram mais bilheteria 

}

function ordenaLancamentos(filmes) {
    for (let i = 0; i <= filmes.length; i++) {
        let filme1 = filmes[i]
        let filme2 = filmes[i+1]

        if (filme1.ano < filme2.ano) {
            filmes[i+1] = filme1
            filmes[i] = filme2
        }
        else if (filme1.ano == filme2.ano && filme1.mes < filme2.mes) {
            filmes[i+1] = filme1
            filmes[i] = filme2
        }
    }
    return filmes
}