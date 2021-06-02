import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class SongPage extends Component {
  constructor() {
    super()
    this.state = {
      song: []
    }
  }

  componentDidMount() {
    this.getSong()
  }

  getSong = async () => {
    const res = await axios.get(
      `${BASE_URL}/songID/${this.props.match.params.id}`
    )
    this.setState({ song: res.data.song })
    console.log(this.state.song)
  }

  render() {
    return (
      <div>
        <img src={this.state.song.coverArt} />
        <div>
          {this.state.song.name} | {this.state.song.genre}{' '}
        </div>
        <div>{this.state.song.description}</div>
      </div>
    )
  }
}

export default SongPage
