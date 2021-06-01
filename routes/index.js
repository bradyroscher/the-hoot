const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HOMEPAGE'))

router.get('/artist/:genre', controllers.getArtistByGenre)
router.get('/song/:genre', controllers.getSongsByGenre)
router.get('/song/:artistID', controllers.getSongsByArtist)

module.export = router
