/** Aula  7 modulo 0*/
// console.log('Hello World');
// let a = 1;
// let b = 2;
// console.log(a + b);
/**
 * Aula 3 m�dulo 1
 * 
 * 0 - obter o usu�rio
 * 1 obter o n�mero de telefon de um usu�rio a partir do seu ID.
 * 2 obter o endere�o do usu�rio pelo ID
 */

 function obterUsuario(callback){
    //Simular um acesso ao BD dando timeout
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Andreia',
            dataNascimento: new Date()
        })
    }, 2000)

 }

 function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            numero: '999990000',
            ddd: '11'
        })
    }, 3000);
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
//  const usuario = obterUsuario();
obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error("problema em usuario ",error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1,telefone){
        if(error1){
            console.error("problema em telefone ",error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error("problema em endere�o ",error2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: ${telefone.ddd} - ${telefone.numero}
            `);
        })

    })
});
 //const telefone = obterTelefone(usuario.id);

 //console.log('usuario',usuario);
 //console.log('telefone ',telefone);