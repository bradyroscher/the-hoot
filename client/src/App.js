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
        { name: 'Hip-Hop', img: '' },
        { name: 'R&B', img: '' },
        { name: 'Pop', img: '' },
        { name: 'Rock', img: '' },
        { name: 'Jazz', img: '' },
        { name: 'Soul', img: '' },
        { name: 'Electronic', img: '' },
        { name: 'Country', img: '' }
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
