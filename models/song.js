const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  artistID: { type: Schema.Types.ObjectId, ref: 'artists', required: true },
  // artistID: { type: String, required: true },
  album: { type: String, required: true },
  coverArt: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('songs', Song)
