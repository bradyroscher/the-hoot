const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HOMEPAGE'))

router.get('/artist/:genre', controllers.getArtistByGenre)
router.get('/artist/name/:name', controllers.getArtistByName)
router.get('/artistID/:id', controllers.getArtistByID)
router.get('song/name/:name', controllers.getSongsByName)
router.get('/songID/:id', controllers.getSongByID)
router.get('/song/:artistID', controllers.getSongsByArtist)
router.post('/song', controllers.addSong)
router.post('/artist', controllers.addArtist)
router.delete('/artitst/:id', controllers.deleteArtist)
router.delete('/song/:id', controllers.deleteSong)

module.exports = router
