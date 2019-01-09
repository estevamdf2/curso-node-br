//importando somente um item do arquivo de servi�o
const { obterPessoas } = require('./service')

async function main(){
    try {
        const {
            results
        } = await obterPessoas('a');

        const familiaLars = results.filter(function (item) {
            /**
             * por padr�o retorna um boolean
             * false -> remove da lista
             * true -> mantem
             * n�o encontrou = -1
             * encontrou = posicaoNoArray
             */
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result;
        })

        /**
         * (pessoa) => pessoa.name
         * Cria uma fun��o que retorna pessoa
         */
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names);

    } catch (error) {
        console.error('Deu ruim ', error)
    }
}

main()