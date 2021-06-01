const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HOMEPAGE'))

router.get('/artist/:genre', controllers.getArtistByGenre)
// router.get('/artist/:genre', (req, res) => {
//   let artists = controllers.getArtistByGenre
//   // let sortedArtists = artists.sort((a, b) => {
//   //   let artistA = a.name
//   //   let artistB = b.name
//   //   if (artistA < artistB) {
//   //     return -1
//   //   }
//   //   if (artistA > artistB) {
//   //     return 1
//   //   }
//   //   return 0
//   // })
//   // res.send(sortedArtists)
// })
router.get('/song/:genre', controllers.getSongsByGenre)
router.get('/song/:artistID', controllers.getSongsByArtist)
router.post('/song', controllers.addSong)
router.post('/artist', controllers.addArtist)
router.delete('/artitst/:id', controllers.deleteArtist)
router.delete('/song/:id', controllers.deleteSong)

module.exports = router
