const Obras = require('../models/obras');

const ObrasQuant = module.exports;

ObrasQuant.index = async () => {
  let res = new Set();

  const results = await Obras.find().select({ "@id": 1, titulo: 1, instrumentos: 1 }).exec();

  results.forEach(result => {
    res.add({
      id: result["@id"],
      titulo: result.titulo,
      partituras: result.instrumentos !== undefined ? result.instrumentos.instrumento.length : 0
    })
  });

  return new Promise((resolve) => {
    resolve(Array.from(res));
  });
};
