const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./ops/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(resp => {
        console.log(`El archivo ${resp} fue creado existosamente`);
      })
      .catch(err => {
        console.log(err);
      });
    break;

  case 'listar':
    let resp = listarTabla(argv.base, argv.limite);
    console.log(resp);
    break;

  default:
    console.log(`Comando ${argv._[0]} Desconocido`);
    break;
}
