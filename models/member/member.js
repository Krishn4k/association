const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

const MemberSchema = new Schema({
  name: String,
  dob: Date,
  pseudo: String
})

// Export Contact model
const Member = module.exports = mongoose.model('Member', MemberSchema)