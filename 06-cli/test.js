const {
  deepEqual,
  ok
} = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

const database = require('./database')
describe('Suite de manipulação de Heróis', () => {

  it('deve pesquisar um heroi', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
    // ok(resultado,expected)
    deepEqual(resultado,expected)
  })

//   it('deve cadastrar m heroi, usando arquivos', async () => {
//     const expected = DEFAULT_ITEM_CADASTRAR
//
//     ok(null, expected);
//   })


})
