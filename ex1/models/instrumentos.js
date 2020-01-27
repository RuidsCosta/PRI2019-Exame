const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Partitura = require('./partitura').schema;

const InstrumentosSchema = new Schema({
  instrumento: [
    {
      designacao: String,
      partitura: Partitura
    }
  ]
});

module.exports = mongoose.model('instrumentos', InstrumentosSchema);
