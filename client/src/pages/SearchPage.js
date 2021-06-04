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
  }

  render() {
    return (
      <div>
        <div className="search-info">You can search by song or artist!</div>
        <div className="search-field">
          <div className="comment-card">
            <form onSubmit={this.handleClick}>
              <TextInput
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name={'name'}
                placeholder={'Search'}
              />
              <div className="comment-buttons">
                <button className="comment-button">Search</button>
              </div>
            </form>
          </div>
        </div>
        {this.state.artistResults.map((artist, index) => (
          <div
            key={index}
            onClick={() => this.props.history.push(`/song/${artist._id}`)}
            className="artist-search"
          >
            <div className="name">
              {artist.name} | {artist.genre}
            </div>
            <img
              className="search-artist-image"
              src={artist.img}
              alt="https://i.imgur.com/nIbih28.png"
            />
            <div> Popular Song: {artist.topSong} </div>
          </div>
        ))}
        {this.state.songResults.map((song, index) => (
          <div
            key={index}
            onClick={() => this.props.history.push(`/songID/${song._id}`)}
            className="song-search"
          >
            <div className="name">
              {song.name} by {song.artist}
            </div>
            <img
              className="search-song-image"
              src={song.coverArt}
              alt="https://i.imgur.com/hjuGAIA.jpg"
            />
            <div className="search-description">
              Album: {song.album} | {song.genre}{' '}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SearchPage
