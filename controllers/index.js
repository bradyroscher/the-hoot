const Artist = require('../models/artist')
const Song = require('../models/song')
const Comment = require('../models/comment')
const ArtistComment = require('../models/artistComments')

const getArtistByGenre = async (req, res) => {
  try {
    const { genre } = req.params
    const artists = await Artist.find({ genre: genre }).sort({ name: 'asc' })
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
    const songs = await Song.find({ artistID: artistID }).sort({ name: 'asc' })
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

const getCommentBySong = async (req, res) => {
  try {
    const { songId } = req.params
    const comments = await Comment.find({ songId: songId })
    if (!comments) {
      return status(404).send("Can't find any songs")
    }
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const postComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({ comment })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getArtistCommentByArtist = async (req, res) => {
  try {
    const { artistId } = req.params
    const artistcomments = await ArtistComment.find({ artistId: artistId })
    if (!artistcomments) {
      return status(404).send("Can't find any songs")
    }
    res.status(200).json(artistcomments)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const postArtistComment = async (req, res) => {
  try {
    const artistcomment = await new ArtistComment(req.body)
    await artistcomment.save()
    return res.status(201).json({ artistcomment })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteArtistComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await ArtistComment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
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

const editComment = async (req, res) => {
  try {
    const { id } = req.params
    await Comment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!comment) {
          res.status(404).send('Comment not found!')
        }
        return res.status(200).json(comment)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editArtistComment = async (req, res) => {
  try {
    const { id } = req.params
    await ArtistComment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!comment) {
          res.status(404).send('Comment not found!')
        }
        return res.status(200).json(comment)
      }
    )
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
  getCommentBySong,
  postComment,
  deleteComment,
  editComment,
  getArtistCommentByArtist,
  postArtistComment,
  deleteArtistComment,
  editArtistComment
}
