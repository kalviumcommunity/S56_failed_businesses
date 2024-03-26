
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  created_by: String,
});

businessSchema.set("versionKey",false)

const userSchema = new mongoose.Schema({
  username:String,
});
userSchema.set("versionKey",false)

const businesses = mongoose.model('dataone', businessSchema);
const users = mongoose.model('users',userSchema)
module.exports = {businesses,users};
