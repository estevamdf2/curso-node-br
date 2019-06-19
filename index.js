/*
 * Aula 3 módulo 1
 * 
 * 0 - obter o usuário
 * 1 obter o número de telefon de um usuário a partir do seu ID.
 * 2 obter o endereço do usuário pelo ID
 */
// importando um módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

 function obterUsuario(){
    //quando der erro -> Reject(ERRO)
    //quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            //Testando error
            //return reject(new Error('Deu ruim msm'));
            
            return resolve({
                id: 1,
                nome: 'Andreia',
                dataNascimento: new Date()
            })
        }, 2000)
    })
 }

 function obterTelefone(idUsuario){
     return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                numero: '999990000',
                ddd: '11'
            })
        }, 3000);
     })
    
 }

 function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua X quadra 10',
            numero: 10
        })
    }, 1000);
 }

 function resolverUsuario(erro, usuario){
     console.log('usuario',usuario);
 }

 // 1º passo adicionar a palavra async -> automaticamente ele retornará uma Promisse
main(); // chama a função criada
 async function main(){
    try {

        /** 1º forma de fazer */
        //medir a chamada das funções
        console.time('medida - promise');
        const usuario = await obterUsuario();
        const telefone = await obterTelefone(usuario.id);
        const endereco = await obterEnderecoAsync(usuario.id);

        console.log(`
                        Nome: ${usuario.nome},
                        Endereco: ${endereco.rua}, ${endereco.numero},
                        Telefone: ${telefone.ddd} - ${telefone.numero}
                    `);
        
        console.timeEnd('medida - promise');


         /** 2º forma de fazer */
        //medir a chamada das funções
        // console.time('medida - promise');
        // const usuario = await obterUsuario();

        // const resultado = await Promise.all([
        //     obterTelefone(usuario.id),
        //     obterEnderecoAsync(usuario.id)
        // ])
        
        // const endereco = resultado[1];
        // const telefone = resultado[0];

        // console.log(`
        //                 Nome: ${usuario.nome},
        //                 Endereco: ${endereco.rua}, ${endereco.numero},
        //                 Telefone: ${telefone.ddd} - ${telefone.numero}
        //             `);
        
        // console.timeEnd('medida - promise');

    } catch (error) {
        console.error("Deu ruim ",error);
    }
}

//A5 mód 1. Refatorando callbacks para promises
//  const usuarioPromise = obterUsuario();
//  //Para manipular com sucesso usar .then
//  //Para manipular com erros usar .catch
//  usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return {
//                 usuario: {
//                     id: usuario.id,
//                     nome: usuario.nome
//                 },
//                 telefone: result 
//             }
//         })
//     })
//     .then(function (resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone : resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function(resultado){
//        //console.log('resultado', resultado);
//        console.log(`
//                 Nome: ${resultado.usuario.nome},
//                 Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
//                 Telefone: ${resultado.telefone.ddd} - ${resultado.telefone.numero}
//             `);
//     })
//     //caso de erro cai neste geral
//     .catch(function(error){
//         console.error('erro usuario ', error);
//     })

 


//  const usuario = obterUsuario();
// obterUsuario(function resolverUsuario(error, usuario){
//     if(error){
//         console.error("problema em usuario ",error);
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1,telefone){
//         if(error1){
//             console.error("problema em telefone ",error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error("problema em endereço ",error2);
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero},
//                 Telefone: ${telefone.ddd} - ${telefone.numero}
//             `);
//         })

//     })
// });
 