
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
});

businessSchema.set("versionKey",false)

const businesses = mongoose.model('dataone', businessSchema);

module.exports = businesses;
