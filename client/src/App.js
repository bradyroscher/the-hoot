import React, { Component } from 'react'
// import Header from './components/Header'
import GenrePage from './pages/GenrePage'
import SongList from './pages/SongList'
import ArtistList from './pages/ArtistList'
import ArtistPage from './pages/ArtistPage'
import SongPage from './pages/SongPage'
import AddArtistPage from './pages/AddArtistPage'
import AddSongPage from './pages/addSongPage'

import './App.css'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      genres: [
        { name: 'Hip-Hop', img: 'https://i.imgur.com/KJv60wu.png' },
        { name: 'R&B', img: 'https://i.imgur.com/xBGXmeS.png' },
        { name: 'Pop', img: 'https://i.imgur.com/WtXipHB.png' },
        { name: 'Rock', img: 'https://i.imgur.com/aimEKwb.png' },
        { name: 'Jazz', img: 'https://i.imgur.com/DAG2O0v.png' },
        { name: 'Soul', img: 'https://i.imgur.com/hTkw6cG.png' },
        { name: 'Electronic', img: 'https://i.imgur.com/8OSa28n.png' },
        { name: 'Country', img: 'https://i.imgur.com/ZcwYxlR.png' },
        { name: 'Reggaetón', img: 'https://i.imgur.com/pp0EL5N.png' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <GenrePage genres={this.state.genres}></GenrePage>}
          />
          <Route path="/artist/:genre" component={() => <ArtistList />} />
          <Route path="/song/:genre" component={() => <SongList />} />
          <Route path="/artist/:id" component={() => <ArtistPage />} />
          <Route path="/song/:id" component={() => <SongPage />} />
          <Route path="/artist/add" component={() => <AddArtistPage />} />
          <Route path="/song/add" component={() => <AddSongPage />} />
        </Switch>
      </div>
    )
  }
}

export default App
