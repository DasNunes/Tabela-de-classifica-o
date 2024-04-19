var joão = {nome: 'joão', vitorias: 4, empates: 2, derrotas: 1, pontos: 0}
var Paulo = {nome: 'Paulo', vitorias:3, empates: 1, derrotas: 3, pontos: 0}
var jogadores = [joão, Paulo]

function exibirJogadoresNaTela() {
    var construindoTabela = ""; 
    for (var i = 0; i < jogadores.length; i++){
        construindoTabela = construindoTabela + "<tr><td> " + jogadores[i].nome + "</td>";
        construindoTabela = construindoTabela + "<td>" + jogadores[i].vitorias + "</td>";
        construindoTabela = construindoTabela + "<td>" + jogadores[i].empates + "</td>";
        construindoTabela = construindoTabela + "<td>" + jogadores[i].derrotas + "</td>";
        construindoTabela = construindoTabela + "<td>" + jogadores[i].pontos + "</td>";
        construindoTabela = construindoTabela + "<td> <button onClick='adicionarVitoria(" + i + ")'>Vitoria</button> </td>";
        construindoTabela = construindoTabela + "<td> <button onClick='adicionarEmpate(" + i + ")'>Empate</button> </td>";
        construindoTabela = construindoTabela + "<td> <button onClick='adicionarDerrota(" + i + ")'>Derrota</button> </td></tr>";
    }
    var corpoDaTabela = document.getElementById('corpoDaTabela')   
    corpoDaTabela.innerHTML = construindoTabela
}   
exibirJogadoresNaTela()

function adicionarVitoria(PosicaoDoJogador) {
   var jogador = jogadores[PosicaoDoJogador]  
   jogador.vitorias++
   jogador.pontos = calcularPontos(jogador)

   exibirJogadoresNaTela()
}

function adicionarEmpate() {

}

function adicionarDerrota() {

}

function calcularPontos(player) {
    var pontos = player.vitorias * 3 + player.empates
    return pontos
}