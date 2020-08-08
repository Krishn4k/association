const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

const InfosSchema = new Schema({
  username: String,
  password: String,
  usermail: String,
  infos: {}
})

// Export Infos model
module.exports = mongoose.model('Infos', InfosSchema)