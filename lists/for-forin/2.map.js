const service = require('./service');

async function main(){

//Criando o proprio MAP
Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length -1; indice++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado);
    }
}

    try {
        const results = await service.obterPessoas('a');
        //let names = [];
        // results.results.forEach(function (item) {
        //     names.push(item.name);
        // })

        // const names = results.results.map(function (pessoa) {
        //     return pessoa.name
        // })

        //names = results.results.map((pessoa) => pessoa.name)

        const names = results.results.meuMap(function (pessoa, indice){
            return `[${indice}]${pessoa.name}`
            //return pessoa.name
        })
        
        console.log('names ',names);
        
    } catch (error) {
        console.error(`Error interno`,error)
    }

}

main()