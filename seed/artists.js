const db = require('../db')
const Artist = require('../models/artist')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artists = [
    {
      name: 'Kendrick Lamar',
      img: 'https://i.imgur.com/u91lqbp.jpg',
      genre: 'Hip-Hop',
      topSong: 'HUMBLE.',
      description:
        'Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, and record producer. Since his mainstream debut in 2012 with Good Kid, M.A.A.D. City, Lamar has been regarded as one of the most influential rappers of his generation. Aside from his solo career, he is also known as a member of the hip hop supergroup Black Hippy alongside his Top Dawg Entertainment (TDE) label-mates Ab-Soul, Jay Rock, and Schoolboy Q.'
    },
    {
      name: 'Juice WRLD',
      img: 'https://i.imgur.com/VGLMfLN.jpg',
      genre: 'Hip-Hop',
      topSong: 'Lucid Dreams',
      description:
        "Jarad Anthony Higgins (December 2, 1998 – December 8, 2019), known professionally as Juice Wrld (pronounced 'juice world'; stylized as Juice WRLD), was an American rapper, singer, and songwriter from Chicago. His song 'Lucid Dreams' has been played on the music streaming platform Spotify over one billion times and peaked at number two on the Billboard Hot 100. 'Lucid Dreams', along with his earlier hit single 'All Girls Are the Same', helped him secure a recording contract with Lil Bibby's Grade A Productions and Interscope Records. He derived his stage name from late American rapper Tupac Shakur's role in the film Juice and has stated that it represents taking over the world."
    },
    {
      name: 'Kali Uchis',
      img: 'https://i.imgur.com/UkS5HWM.jpg',
      genre: 'R&B',
      topSong: 'telepatía',
      description:
        "Karly-Marina Loaiza (born July 17, 1994), known professionally as Kali Uchis, is an American singer and songwriter. Born in Alexandria, Virginia, she initially garnered music industry attention with her 2012 mixtape, Drunken Babble, which was followed by her debut EP, Por Vida, released in 2015. Uchis released her debut studio album, Isolation, in 2018 to widespread acclaim. Uchis's second studio album and her first Spanish language project, Sin Miedo (del Amor y Otros Demonios) ∞, was released in 2020. The album spawned the single 'Telepatía' which became Uchis's first solo charting hit on the US Billboard Hot 100. She is also known for her collaboration with artist Kaytranada in his song titled '10%', which earned Kali Uchis her first Grammy Award."
    },
    {
      name: 'Billie Eilish',
      img: 'https://i.imgur.com/a3Ll2v9.jpg',
      genre: 'Pop',
      topSong: 'Bad Guy',
      description:
        "Billie Eilish Pirate Baird O'Connell (born December 18, 2001) is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song 'Ocean Eyes' to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom. The song was written and produced by her brother Finneas O'Connell, with whom she collaborates on music and live shows. Her debut EP, Don't Smile at Me (2017), became a sleeper hit, reaching the top 15 in the US, UK, Canada, and Australia. Eilish's debut studio album, When We All Fall Asleep, Where Do We Go? (2019), debuted atop the US Billboard 200, reached number-one in the UK, and became one of the best-selling albums of 2019. The album's fifth single 'Bad Guy' became her first number-one song on the Billboard Hot 100. In 2020, she performed the theme song 'No Time to Die' for the James Bond film of the same name, which became her first number-one single in the UK. Her later singles 'Everything I Wanted', 'My Future', 'Therefore I Am', and 'Your Power' peaked within the top 10 in the US and UK. Eilish has received several accolades, including seven Grammy Awards, two American Music Awards, two Guinness World Records, three MTV Video Music Awards, and two Brit Awards. She is the youngest person and the second in history to win the four main Grammy categories—Best New Artist, Record of the Year, Song of the Year, and Album of the Year—in the same year. In 2019, Time magazine placed her on their inaugural Time 100 Next list. Eilish is the 26th-highest-certified artist of the digital singles era, according to the RIAA, and one of the most successful artists of the 2010s decade, according to Billboard."
    }
    // {
    //   name: ,
    //   img: ,
    //   genre: ,
    //   topSong: ,
    //   description: ,
    // }
  ]

  await Artist.insertMany(artists)
  console.log('Created some artists')
}
const run = async () => {
  await main()
  db.close()
}

run()
