import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import axios from 'axios'
import { BASE_URL } from '../globals'

class SearchPage extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      artistResults: [],
      songResults: []
    }
  }

  getSongResults = async (res, req) => {
    res = await axios.get(`${BASE_URL}/song-name/${this.state.search}`)
    this.setState({ songResults: res.data })
  }

  getArtistResults = async (res, req) => {
    res = await axios.get(`${BASE_URL}/artist-name/${this.state.search}`)
    this.setState({ artistResults: res.data })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.getSongResults()
    this.getArtistResults()
  }

  handleChange = async (e) => {
    await this.setState({ search: e.target.value })
    console.log(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <TextInput
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name={'name'}
            placeholder={'Search'}
          />
          <button>SEARCH</button>
        </form>
        {this.state.artistResults.map((artist, index) => (
          <div
            key={index}
            onClick={() => this.props.history.push(`/song/${artist._id}`)}
          >
            <div>{artist.name}</div>
            <img src={artist.img} />
            <div> Popular Song: {artist.topSong} </div>
          </div>
        ))}
        {this.state.songResults.map((song, index) => (
          <div
            key={index}
            onClick={() => this.props.history.push(`/songID/${song._id}`)}
          >
            <div>{song.name}</div>
            <img src={song.coverArt} />
          </div>
        ))}
      </div>
    )
  }
}

export default SearchPage
