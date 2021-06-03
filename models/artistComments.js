const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArtistComment = new Schema({
  text: { type: String, required: true },
  artistId: { type: String, required: true }
})

module.exports = mongoose.model('artistcomments', ArtistComment)
