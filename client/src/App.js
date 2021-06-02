import React, { Component } from 'react'
import Header from './components/Header'
import GenrePage from './pages/GenrePage'
import SongList from './pages/SongList'
import ArtistList from './pages/ArtistList'
import ArtistPage from './pages/ArtistPage'
import SongPage from './pages/SongPage'
import AddArtistPage from './pages/AddArtistPage'
import AddSongPage from './pages/AddSongPage'
import SearchPage from './pages/SearchPage'
// import BASE_URL from './globals'

import './App.css'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      genres: [
        { name: 'Hip-Hop', img: 'https://i.imgur.com/KJv60wu.png' },
        { name: 'R&B', img: 'https://i.imgur.com/erEhGY3.png' },
        { name: 'Rock', img: 'https://i.imgur.com/aimEKwb.png' },
        { name: 'Pop', img: 'https://i.imgur.com/WtXipHB.png' },
        { name: 'Jazz', img: 'https://i.imgur.com/DAG2O0v.png' },
        { name: 'Soul', img: 'https://i.imgur.com/hTkw6cG.png' },
        { name: 'Electronic', img: 'https://i.imgur.com/8OSa28n.png' },
        { name: 'Country', img: 'https://i.imgur.com/ZcwYxlR.png' },
        { name: 'Reggaetón', img: 'https://i.imgur.com/pp0EL5N.png' }
      ]
    }
  }

  // getArtistsByGenre = () =>

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <GenrePage {...props} genres={this.state.genres}></GenrePage>
            )}
          />
          <Route
            path="/artist/:genre"
            component={(props) => <ArtistList {...props} />}
          />
          <Route
            path="/song/:artistID"
            component={(props) => <SongList {...props} />}
          />
          <Route
            path="/songID/:id"
            component={(props) => <SongPage {...props} />}
          />
          <Route
            path="/artist-add/:genre"
            component={(props) => <AddArtistPage {...props} />}
          />
          <Route
            path="/song-add/:artistID"
            component={(props) => <AddSongPage {...props} />}
          />
          <Route
            path="/search"
            component={(props) => <SearchPage {...props} />}
          />
          <Route path="/artist/:id" component={() => <ArtistPage />} />
        </Switch>
      </div>
    )
  }
}

export default App
