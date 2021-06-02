import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class ArtistList extends Component {
  constructor() {
    super()
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    this.getArtists()
  }

  getArtists = async () => {
    const res = await axios.get(
      `${BASE_URL}/artist/${this.props.match.params.genre}`
    )
    this.setState({ artists: res.data })
    console.log(this.state.artists)
  }

  render() {
    console.log(this.state.artists)
    return (
      <div>
        {this.state.artists.map((artist, index) => (
          <div
            key={index}
            onClick={() => this.props.history.push(`/song/${artist._id}`)}
            artistImg={artist.img}
          >
            <div>{artist.name}</div>
            <img src={artist.img} />
            <div> Popular Song: {artist.topSong} </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ArtistList
