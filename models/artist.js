const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  genre: { type: String, required: true },
  topSong: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('artists', Artist)
