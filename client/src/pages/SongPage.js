import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class SongPage extends Component {
  constructor() {
    super()
    this.state = {
      song: [],
      comments: [],
      value: ''
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

  getComment = async () => {
    const res = await axios.get(
      `${BASE_URL}/song-comments/song/${this.state.song._id}`
    )
    this.setState({ comments: res.data })
  }

  postComment = async (res, req) => {
    res = await axios.post(`${BASE_URL}/song-comments/add`, {
      text: this.state.value,
      songID: this.state.song._id
    })
  }

  deleteSong = async () => {
    await axios.delete(`${BASE_URL}/song-delete/${this.state.song._id}`)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <img src={this.state.song.coverArt} />
        <div>
          {this.state.song.name} | {this.state.song.genre}{' '}
        </div>
        <div>{this.state.song.description}</div>
        <button onClick={this.deleteSong}>DELETE</button>
      </div>
    )
  }
}

export default SongPage
