const Obras = require('../models/obras');

const Compositores = module.exports;

Compositores.index = async () => {
  let res = new Set();

  const results = await Obras.find().sort({compositor: 1}).select('-_id compositor').exec();

  results.forEach(result => {
    result.compositor !== undefined ? res.add(result.compositor) : {} ;
  });

  return new Promise((resolve) => {
    resolve(Array.from(res));
  });
};
