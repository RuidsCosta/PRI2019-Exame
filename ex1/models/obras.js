const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instrumentos = require('./instrumentos').schema;

const ObraSchema = new Schema({
  "@id": String,
  titulo: String,
  tipo: String,
  compositor: String,
  instrumentos: Instrumentos,
});

module.exports = mongoose.model('obras', ObraSchema);
