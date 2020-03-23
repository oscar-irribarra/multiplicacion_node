const opt = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10,
    description: 'Limita la cantidad de valores mutiplicados'
  }
};

const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
  .command('crear', 'Genera un archivo con la tabla de multiplicar', opt)
  .help()
  .argv;

module.exports = {
  argv
};