const fs = require('fs');

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) && !Number(limite)) {
      reject(`El valor ${base} no es un numero`);
    }

    let data = listarTabla(base, limite);

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);

      resolve(`tabla-${base}.txt`);
    });
  });
};

let listarTabla = (base, limite) => {
  let data = '';
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  return data;
};

module.exports = {
  crearArchivo,
  listarTabla
};
