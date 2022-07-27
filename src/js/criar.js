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

    listaFilmesLancamentos = ordenaFilmes(listaFilmesLancamentos, "lancamentos")
}

function criarlistaFilmesRecomendados(filmes) {
    let listaFilmesRecomendados = []
    for (let vez = 1; vez <= 10; vez++) { // Conta a vez que está repetindo até 10
        let index = Math.random() // Pega um número aleatório para ser usado como indice
        let filme = filmes[index] // Pega o filme na lista de filmes de acordo com o indice
        listaFilmesRecomendados[listaFilmesRecomendados.length] = filme // Adiciona o filme na lista dos filmes recomendados
    }
}

function criarFilmesMaisAmados(filmes) {
    let listaFilmesMaisAmados = []
    for (filme of filmes) {  // Percorre a lista de filmes
        if (filme.mediaAvaliacao > 4) {
            listaFilmesMaisAmados[listaFilmesMaisAmados.length] = filme // Adiciona o filme na lista de filmes mais amados
        }
    }

    listaFilmesMaisAmados = ordenaFilmes(listaFilmesMaisAmados, "maisamados")
}

function criarFilmesMaisAclamados(filmes) {
    let listaFilmesMaisAclamados = []
    for (filme of filmes) { // Percorre a lista de filmes
        if (filme.criticas.length > 4) { // Verifica se o número de críticas é maior que 4
            listaFilmesMaisAclamados[listaFilmesMaisAclamados.length] = filme // Adiciona o filme na lista de filmes mais aclamados
        }
    }

    listaFilmesMaisAclamados = ordenaFilmes(listaFilmesMaisAclamados, "maisaclamados")
}

function criarFilmesRecordeBilheteria(filmes) {
    let recordesDeBilheteria = ordenaFilmes(filmes, "bilheteria")
}

/*

# Div - classe card
# Div - com uma tag de imagem
# Ul - classe content - li com a quantidade de estrelas 

*/

var container = document.getElementById("container");

function criarElementoFilme(filme){ 
    let card = document.createElement("div"); // criando o nosso elemento card 
    card.className = "card"; // colocando a classe do nosso elemento como card 
    container.appendChild(card);// adicionando o elemento card no nosso container 

    let div = document.createElement("div"); // criando o nosso elemento div
    let img = document.createElement("img");// criando o nosso elemento img
    img.src = filme.poster; // adicionando o caminho da nossa img 
    div.appendChild(img); //adicionando o elemento img na nossa div 
    card.appendChild(div); //adicionando o elemento div no nosso card

    let content = document.createElement("ul");  // criando o nosso elemento content 
    content.className = "content";  // colocando a classe do nosso elemento como content
    for (let contador = 0; contador < filme.mediaAvaliacao; contador++){ // o contador vai ser menor ou igual ao tamanho da media de avaliação
        let li = document.createElement("li"); //criando o nosso elemento li
        content.appendChild(li);//adicionando o elemento img no nosso content

    }
    card.appendChild(content); //adicionando o elemento content no nosso card


}

function ordenaFilmes(filmes, sessao) {
    for (let i = 0; i <= filmes.length; i++) {// a variavel i é o nosso contador, e ele vai ser menor ou igual ao tamanho da lista de filmes 
        let filme1 = filmes[i] 
        let filme2 = filme[i+1]

        switch (sessao) {
            case "lancamentos":
                if (filme1.ano < filme2.ano) {
                    filmes[i+1] = filme1
                    filmes[i] = filme2
                }
                else if (filme1.ano == filme2.ano && filme1.mes < filme2.mes) {
                    filmes[i+1] = filme1
                    filmes[i] = filme2
                }
                break
            case "maisamados":
                if (filme1.mediaAvaliacao < filme2.mediaAvaliacao) {
                    filmes[i+1] = filme1
                    filmes[i] = filme2
                }
                break
            case "maisaclamados":
                if (filme1.criticas.length < filme2.criticas.length) {
                    filmes[i+1] = filme1
                    filmes[i] = filme2
                }
                break
            case "bilheteria":
                if (filme1.bilheteria < filme2.bilheteria) {
                    filmes[i+1] = filme1
                    filmes[i] = filme2
                }
                break
        }
    }
}