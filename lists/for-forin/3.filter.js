//importando somente um item do arquivo de serviço
const { obterPessoas } = require('./service')

async function main(){
    try {
        const {
            results
        } = await obterPessoas('a');

        const familiaLars = results.filter(function (item) {
            /**
             * por padrão retorna um boolean
             * false -> remove da lista
             * true -> mantem
             * não encontrou = -1
             * encontrou = posicaoNoArray
             */
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result;
        })

        /**
         * (pessoa) => pessoa.name
         * Cria uma função que retorna pessoa
         */
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names);

    } catch (error) {
        console.error('Deu ruim ', error)
    }
}

main()