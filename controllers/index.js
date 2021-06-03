const Artist = require('../models/artist')
const Song = require('../models/song')
const Comment = require('../models/comment')

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

const getArtistByName = async (req, res) => {
  try {
    const { name } = req.params
    const artists = await Artist.find({ name: name })
    if (!artists) {
      return res.status(404).send("Can't find any artists by that name")
    }
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// const getArtistByID = async (req, res) => {
//   try {
//     const { id } = req.params
//     const artist = await Artist.findById(id)
//     if (!artist) {
//       return res.status(404).send("Can't Find Artist")
//     }
//     return res.status(200).json(artist)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }

const getArtistByID = async (req, res) => {
  try {
    const { id } = req.params
    const artist = await Artist.findById(id)
    if (artist) {
      return res.status(200).json({ artist })
    }
    return res.status(404).send('Plant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSongByID = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (song) {
      return res.status(200).json({ song })
    }
    return res.status(404).send('Plant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
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
    res.status(200).send(songs)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getSongsByName = async (req, res) => {
  try {
    const { name } = req.params
    const songs = await Song.find({ name: name })
    if (!songs) {
      return status(404).send("Can't find any songs")
    }
    res.status(200).send(songs)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getCommentBySong = async (res, req) => {
  try {
    const { songID } = req.params
    const comments = await Song.find({ songID: songID })
    if (!comments) {
      return status(404).send("Can't find any comments")
    }
    res.status(200).send(comments)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const postComment = async (res, req) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({ comment })
  } catch (error) {
    return res.status(500).send(error.message)
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
  getArtistByName,
  getArtistByID,
  getSongsByArtist,
  getSongsByGenre,
  getSongsByName,
  getSongByID,
  addArtist,
  addSong,
  deleteArtist,
  deleteSong,
  getCommentBySong
}
