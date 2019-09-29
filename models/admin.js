const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  username: String,
  password: String
})

// Export Admin model
const Admin = module.exports = mongoose.model('Admin', AdminSchema)