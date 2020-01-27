const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartituraSchema = new Schema({
  "-type": String,
  "-path": String
});

module.exports = mongoose.model('partitura', PartituraSchema);
