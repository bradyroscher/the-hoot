import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class SongList extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      artistImg: '',
      artistDescription: ''
    }
  }

  componentDidMount() {
    this.getSongs()
    this.getArtist()
  }

  getSongs = async () => {
    const res = await axios.get(
      `${BASE_URL}/song/${this.props.match.params.artistID}`
    )
    this.setState({ songs: res.data })
    console.log(this.state.songs)
  }

  getArtist = async () => {
    const res = await axios.get(
      `${BASE_URL}/artistID/${this.props.match.params.artistID}`
    )
    this.setState({ artistImg: res.data.artist.img })
    this.setState({ artistDescription: res.data.artist.description })
    console.log(res.data.artist)
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.artistImg} />
          <p>{this.state.artistDescription}</p>
          {this.state.songs.map((song, index) => (
            <div
              key={index}
              onClick={() => this.props.history.push(`/songID/${song._id}`)}
            >
              <div>{song.name}</div>
              <img src={song.coverArt} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SongList
