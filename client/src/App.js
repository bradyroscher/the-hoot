import React, { Component } from 'react'
// import Header from './components/Header'
import GenrePage from './pages/GenrePage'
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
        </Switch>
      </div>
    )
  }
}

export default App
