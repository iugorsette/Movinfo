import filmes from "./dados.js";

function criarFilmesLancamentos() {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear() // Pega o ano atual da data
    let mesAtual = dataAtual.getMonth()
    let listaFilmesLancamentos = []
    for (filme of filmes) { // Percorre a lista de filmes
        let dataFilme = filme.data_lacamento;
        if (dataFilme[2] > anoAtual-1) { // Verifica se o ano do filme é maior ao ano passado
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
        else if (dataFilme[2] == anoAtual-1 && dataFilme[1]+mesAtual < 12) { // Verifica se o ano do filme é igual ao ano passado, e se a soma dos meses for menor que 1 ano
            listaFilmesLancamentos[listaFilmesLancamentos.length] = filme // Adiciona o filme na lista dos filmes lançamentos
        }
    }

    listaFilmesLancamentos = ordenaFilmes(listaFilmesLancamentos, "lancamentos")
    console.log(listaFilmesLancamentos);
}

criarFilmesLancamentos()

function criarlistaFilmesRecomendados() {
    let listaFilmesRecomendados = []
    for (let vez = 1; vez <= 10; vez++) { // Conta a vez que está repetindo até 10
        let index = Math.random() // Pega um número aleatório para ser usado como indice
        let filme = filmes[index] // Pega o filme na lista de filmes de acordo com o indice
        listaFilmesRecomendados[listaFilmesRecomendados.length] = filme // Adiciona o filme na lista dos filmes recomendados
    }
}

function criarFilmesMaisAmados() {
    let listaFilmesMaisAmados = []
    for (filme of filmes) {  // Percorre a lista de filmes
        if (mediaAvaliacao(filme) > 4.0) {
            listaFilmesMaisAmados[listaFilmesMaisAmados.length] = filme // Adiciona o filme na lista de filmes mais amados
        }
    }

    listaFilmesMaisAmados = ordenaFilmes(listaFilmesMaisAmados, "maisamados")
}

function criarFilmesMaisAclamados() {
    let listaFilmesMaisAclamados = []
    for (filme of filmes) { // Percorre a lista de filmes
        if (filme.avaliacoes.length > 4) { // Verifica se o número de críticas é maior que 4
            listaFilmesMaisAclamados[listaFilmesMaisAclamados.length] = filme // Adiciona o filme na lista de filmes mais aclamados
        }
    }

    listaFilmesMaisAclamados = ordenaFilmes(listaFilmesMaisAclamados, "maisaclamados")
}

function criarFilmesRecordeBilheteria() {
    let recordesDeBilheteria = ordenaFilmes(filmes, "bilheteria")
}

/*

# Div - classe card
# Div - com uma tag de imagem
# Ul - classe content - li com a quantidade de estrelas 

*/

var containers = document.getElementsByClassName("container");

function criarElementoFilme(filme, index){ 
    let card = document.createElement("div"); // criando o nosso elemento card 
    card.className = "card"; // colocando a classe do nosso elemento como card 
    containers[index].appendChild(card);// adicionando o elemento card no nosso container 

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

function mediaAvaliacao(filme) {
    let media = 0;
    for (let contador = 0; contador < filme.avaliacoes.length; contador++) {
        media += filme.avaliacoes[contador];
    }
    return media/filme.avaliacoes.length;
}

function ordenaFilmes(listaFilmes, sessao) {
    for (let i = 0; i <= listaFilmes.length; i++) {// a variavel i é o nosso contador, e ele vai ser menor ou igual ao tamanho da lista de filmes 
        let filme1 = listaFilmes[i] 
        let filme2 = listaFilmes[i+1]

        let dataFilme1 = filme1.data_lacamento;
        let dataFilme2 = filme2.data_lacamento;

        switch (sessao) {
            case "lancamentos":
                if (dataFilme1[2] < dataFilme2[2]) {
                    listaFilmes[i+1] = filme1
                    listaFilmes[i] = filme2
                }
                else if (dataFilme1[2] == dataFilme2[2] && filme1.mes < filme2.mes) {
                    listaFilmes[i+1] = filme1
                    listaFilmes[i] = filme2
                }
                break
            case "maisamados":
                if (mediaAvaliacao(filme1) < mediaAvaliacao(filme2)) {
                    listaFilmes[i+1] = filme1
                    listaFilmes[i] = filme2
                }
                break
            case "maisaclamados":
                if (filme1.avaliacoes.length < filme2.avaliacoes.length) {
                    listaFilmes[i+1] = filme1
                    listaFilmes[i] = filme2
                }
                break
            case "bilheteria":
                if (filme1.bilheteria < filme2.bilheteria) {
                    listaFilmes[i+1] = filme1
                    listaFilmes[i] = filme2
                }
                break
        }
    }
}