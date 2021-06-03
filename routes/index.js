const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HOMEPAGE'))

router.get('/artist/:genre', controllers.getArtistByGenre)
router.get('/artist-name/:name', controllers.getArtistByName)
router.get('/artistID/:id', controllers.getArtistByID)
router.get('/song-name/:name', controllers.getSongsByName)
router.get('/songID/:id', controllers.getSongByID)
router.get('/song/:artistID', controllers.getSongsByArtist)
router.get('/song-comments/song/:songId', controllers.getCommentBySong)
router.post('/song', controllers.addSong)
router.post('/artist', controllers.addArtist)
router.post('/song-comments/add', controllers.postComment)
router.delete('/artitst-delete/:id', controllers.deleteArtist)
router.delete('/song-delete/:id', controllers.deleteSong)
router.delete('/comment-delete/:id', controllers.deleteComment)
router.put('/edit-comment/:id', controllers.editComment)

module.exports = router
