const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  text: { type: String, required: true },
  songId: { type: String, required: true }
})

module.exports = mongoose.model('comments', Comment)
