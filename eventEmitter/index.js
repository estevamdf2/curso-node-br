/**
 * Eventos são usados para resolver ações continuas.
 * As promises para uma unica ocorrencia.
 */
const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}

//criando uma instancia do objeto
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuário clicou', click);
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// let count = 0;
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok '+(count++));
// }, 1000)

//pegando textos digitados no terminal
const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Voce digitou: ${value.toString().trim()}`);
})