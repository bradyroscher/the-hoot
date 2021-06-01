const Artist = require('../models/artist')
const Song = require('../models/song')

const getArtistByGenre = async (req, res) => {
  try {
    const { genre } = req.params
    const artists = await Artist.find({ genre: genre })
    if (!artists) {
      return res.status(404).send("Can't find any artists by that name")
    }
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getSongsByArtist = async (req, res) => {
  try {
    const { artistID } = req.params
    const songs = await Song.find({ artistID: artistID })
    if (!songs) {
      return status(404).send("Can't find any songs")
    }
    res.status(200).json(songs)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getSongsByGenre = async (req, res) => {
  try {
    const { genre } = req.params
    const songs = await Song.find({ genre: genre })
    if (!songs) {
      return status(404).send("Can't find any songs")
    }
    res.status(500).send(songs)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const addArtist = async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    return res.status(201).json({ artist })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({ song })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Artist.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Artist deleted')
    }
    throw new Error('Artist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Song.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Song deleted')
    }
    throw new Error('Song not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getArtistByGenre,
  getSongsByArtist,
  getSongsByGenre,
  addArtist,
  addSong,
  deleteArtist,
  deleteSong
}
