const db = require('../db')
const Song = require('../models/song')
const mongoose = require('mongoose')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const songs = [
    // {
    //   name: 'HUMBLE.',
    //   artist: 'Kendrick Lamar',
    //   artistID: new mongoose.mongo.ObjectId('60b7a020d609c731a03a7715'),
    //   album: 'DAMN.',
    //   coverArt: 'https://i.imgur.com/rWTkmQk.jpg',
    //   genre: 'Hip-Hop',
    //   description:
    //     "'Humble' (stylized as 'HUMBLE.') is a song by American rapper Kendrick Lamar. It was released on March 30, 2017, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. The song was written by Lamar and Mike Will Made It, and produced by the latter. It was provided to rhythmic contemporary radio as the lead single from Lamar's fourth studio album, Damn. 'Humble' is Lamar's second number-one single on the US Billboard Hot 100 after 'Bad Blood' and his first as a lead artist. The song received four nominations at the 60th Annual Grammy Awards, including, Record of the Year, Best Rap Performance, Best Rap Song, and Best Music Video, winning the latter three."
    // },
    {
      name: 'Lucid Dreams',
      artist: 'Juice WRLD',
      artistID: '60b7a020d609c731a03a7716',
      album: 'Goodbye & Good Riddance',
      coverArt: 'https://i.imgur.com/z2KrTYn.jpg',
      genre: 'Hip-Hop',
      description:
        "'Lucid Dreams' (alternatively 'Lucid Dreams (Forget Me)') is a song by American rapper Juice Wrld. It was officially released by Grade A Productions and Interscope Records on May 11, 2018, after having been previously released on SoundCloud in June 2017. The song was produced by Nick Mira and debuted at number 74 on the Billboard Hot 100, peaking at number two on the chart. The song has also amassed more than 1.5 billion streams on Spotify, being one of the most streamed songs on the platform. A remix featuring fellow American rapper Lil Uzi Vert was recorded but remained unreleased due to sample clearance issues. The remix eventually leaked 3 years later, after fans pooled together $12,000 to purchase the song from leakers. On May 28, 2021, the remix was officially released alongside a re-release of Goodbye & Good Riddance that commemorates the album's third anniversary"
    },
    {
      name: 'telepatía',
      artist: 'Kali Uchis',
      artistID: '60b7a020d609c731a03a7717',
      album: 'Sin Miedo (del Amor y Otros Demonios)',
      coverArt: 'https://i.imgur.com/SNamxEA.jpg',
      genre: 'R&B',
      description:
        "'Telepatía' (stylized as telepatía) is a song by Colombian-American singer Kali Uchis. Originally released on November 18, 2020 as an album track on her second studio album Sin Miedo (del Amor y Otros Demonios), it became the album's third single on February 26, 2021, after gaining prominence on the social media platform TikTok. Uchis drew inspiration from telepathy and being able to spiritually communicate with someone whom she could not be with."
    },
    {
      name: 'Bad Guy',
      artist: 'Billie Eilish',
      artistID: '60b7a020d609c731a03a7718',
      album: 'When We All Fall Asleep, Where Do We Go?',
      coverArt: 'https://i.imgur.com/i74n7K4.jpg',
      genre: 'Pop',
      description:
        "'Bad Guy' (stylized in all lowercase) is a song recorded by American singer Billie Eilish. It was released by Darkroom and Interscope Records as the fifth single from Eilish's debut studio album When We All Fall Asleep, Where Do We Go? Eilish and her brother Finneas O'Connell co-wrote 'Bad Guy', with the latter producing it and the former providing additional production. The song was described as electropop, dance-pop, pop-trap, and nu-goth pop in press reviews, for which synth bass, a kick drum, finger snaps and 808 bass provide minimalist instrumentation. During the song's lyrics, Eilish taunts her lover for being a bad guy although suggesting that she is more resilient than he is, and further touches on themes about misandry and sarcasm."
    }
    // {
    //   name: ,
    //   artist: ,
    //   artistID: ,
    //   album: ,
    //   coverArt: ,
    //   genre: ,
    //   description: ,
    // }
  ]

  await Song.insertMany(songs)
  console.log('Created some songs')
}
const run = async () => {
  await main()
  db.close()
}

run()
