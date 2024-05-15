const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
}, { versionKey: false });


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
}, { versionKey: false });


const businesses = mongoose.model('dataones', businessSchema);
const User = mongoose.model('users', userSchema);

module.exports = { businesses, User };
