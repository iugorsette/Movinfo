import filmes from "./dados.js";
const maxCards = 10;

function criarFilmesLancamentos() {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear() // Pega o ano atual da data
    let mesAtual = dataAtual.getMonth()
    let listaFilmesLancamentos = []
    for (let filme of filmes) { // Percorre a lista de filmes
        let dataFilme = filme.data_lancamento;
        if (dataFilme[2] > anoAtual - 1) { // Verifica se o ano do filme é maior ao ano passado
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
        else if (dataFilme[2] == anoAtual - 1 && dataFilme[1] + mesAtual <= 12) { // Verifica se o ano do filme é igual ao ano passado, e se a soma dos meses for menor que 1 ano
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
    }

    listaFilmesLancamentos = ordenaFilmes(listaFilmesLancamentos, "lancamentos")

    for (let filme of listaFilmesLancamentos) {
        criarElementoFilme(filme, 0)
    }
}

criarFilmesLancamentos()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function criarFilmesRecomendados() {
    let filmes_ = filmes
    let listaFilmesRecomendados = []
    for (let vez = 1; vez <= maxCards; vez++) { // Conta a vez que está repetindo até 10
        let index = getRandomInt(0, filmes_.length) // Pega um número aleatório para ser usado como indice
        let filme = filmes_[index] // Pega o filme na lista de filmes de acordo com o indice
        listaFilmesRecomendados[listaFilmesRecomendados.length] = filme // Adiciona o filme na lista dos filmes recomendados
        filmes_.splice(index, 1)
    }

    for (let filme of listaFilmesRecomendados) {
        criarElementoFilme(filme, 1)
    }
}

criarFilmesRecomendados()

function criarFilmesMaisAmados() {
    let listaFilmesMaisAmados = []
    for (let filme of filmes) {  // Percorre a lista de filmes
        if (mediaAvaliacao(filme) > 4.0) {
            listaFilmesMaisAmados[listaFilmesMaisAmados.length] = filme // Adiciona o filme na lista de filmes mais amados
        }
    }
    listaFilmesMaisAmados = ordenaFilmes(listaFilmesMaisAmados, "maisamados")

    for (let filme of listaFilmesMaisAmados) {
        criarElementoFilme(filme, 2)
    }
}

criarFilmesMaisAmados()

function criarFilmesMaisAclamados() {
    let listaFilmesMaisAclamados = []
    for (filme of filmes) { // Percorre a lista de filmes
        if (filme.avaliacao.length >= 2) { // Verifica se o número de críticas é maior que 4
            listaFilmesMaisAclamados[listaFilmesMaisAclamados.length] = filme // Adiciona o filme na lista de filmes mais aclamados
        }
    }

    listaFilmesMaisAclamados = ordenaFilmes(listaFilmesMaisAclamados, "maisaclamados")

    for (let filme of listaFilmesMaisAclamados) {
        criarElementoFilme(filme, 3)
    }
}

function criarFilmesRecordeBilheteria() {
    let recordesDeBilheteria = ordenaFilmes(filmes, "bilheteria")
    for (let filme of recordesDeBilheteria) {
        criarElementoFilme(filme, 3)
    }
}

criarFilmesRecordeBilheteria()

/*

# Div - classe card
# Div - com uma tag de imagem
# Ul - classe content - li com a quantidade de estrelas 

*/

function criarElementoFilme(filme, index) {
    let containers = document.getElementsByClassName("container");
    let card = document.createElement("div"); // criando o nosso elemento card 
    card.className = "card"; // colocando a classe do nosso elemento como card

    let a = document.createElement("a");
    let tituloDoFilme = filme.titulo.toLowerCase().trim().replace(":", "")
    while (tituloDoFilme.indexOf(' ') > 0){
        tituloDoFilme = tituloDoFilme.replace(" ", "_")
    }
    while (tituloDoFilme.indexOf(',') > 0){
        tituloDoFilme = tituloDoFilme.replace(",", "_")
    }
    console.log(tituloDoFilme)
    a.href = "../componentes/filmes/" + tituloDoFilme + ".html"
    card.appendChild(a)
    
    containers[index].appendChild(card);// adicionando o elemento card no nosso container 

    let div = document.createElement("div"); // criando o nosso elemento div
    let img = document.createElement("img");// criando o nosso elemento img
    img.src = filme.poster; // adicionando o caminho da nossa img 
    div.appendChild(img); //adicionando o elemento img na nossa div 
    a.appendChild(div); //adicionando o elemento div no nosso card
    
    let content = document.createElement("ul");  // criando o nosso elemento content 
    content.className = "content";  // colocando a classe do nosso elemento como content
    for (let contador = 0; contador < mediaAvaliacao(filme); contador++) { // o contador vai ser menor ou igual ao tamanho da media de avaliação
        let li = document.createElement("li"); //criando o nosso elemento li
        content.appendChild(li);//adicionando o elemento img no nosso content

    }
    a.appendChild(content); //adicionando o elemento content no nosso card

}

function mediaAvaliacao(filme) {
    let media = 0;
    if (filme.avaliacao) {
        for (let contador = 0; contador < filme.avaliacao.length; contador++) {
            media += Math.round(filme.avaliacao[contador]);
        }
        media = media / filme.avaliacao.length;
    }
    return media;
}

function ordenaFilmes(listaFilmes, sessao) {
    for (let i2 = 0; i2 <= listaFilmes.length; i2++) {
        for (let i = 0; i <= listaFilmes.length; i++) {// a variavel i é o nosso contador, e ele vai ser menor ou igual ao tamanho da lista de filmes 
            let filme1 = listaFilmes[i]
            let filme2 = listaFilmes[i + 1]

            if (filme1 && filme2) {
                let dataFilme1 = filme1.data_lancamento;
                let dataFilme2 = filme2.data_lancamento;

                switch (sessao) {
                    case "lancamentos":
                        if (dataFilme1[2] < dataFilme2[2] || (dataFilme1[2] == dataFilme2[2] && dataFilme1[1] < dataFilme2[1])) {
                            listaFilmes[i + 1] = filme1
                            listaFilmes[i] = filme2
                            //console.log(filme1.titulo + " trocou de lugar com " + filme2.titulo)
                        }
                        break
                    case "maisamados":
                        if (mediaAvaliacao(filme1) < mediaAvaliacao(filme2)) {
                            listaFilmes[i + 1] = filme1
                            listaFilmes[i] = filme2
                        }
                        break
                    case "maisaclamados":
                        if (filme1.avaliacao.length < filme2.avaliacao.length) {
                            listaFilmes[i + 1] = filme1
                            listaFilmes[i] = filme2
                        }
                        break
                    case "bilheteria":
                        if (filme1.bilheteria < filme2.bilheteria) {
                            listaFilmes[i + 1] = filme1
                            listaFilmes[i] = filme2
                        }
                        break
                }
            }
        }
    }
    listaFilmes.length = maxCards;
    return listaFilmes;
}