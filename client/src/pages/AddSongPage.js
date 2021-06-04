import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import TextInput from '../components/TextInput'
import BigTextInput from '../components/BigTextInput'

class AddSongPage extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      artist: '',
      artistID: '',
      album: '',
      coverArt: '',
      genre: '',
      description: ''
    }
  }

  postSong = async (res, req) => {
    res = await axios.post(`${BASE_URL}/song`, {
      name: this.state.name,
      artist: this.state.artist,
      artistID: this.state.artistID,
      album: this.state.album,
      coverArt: this.state.coverArt,
      genre: this.state.genre,
      description: this.state.description
    })
    this.props.history.push(`/song/${this.state.artistID}`)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.postSong()
  }

  componentDidMount() {
    this.getArtist()
  }

  getArtist = async () => {
    const res = await axios.get(
      `${BASE_URL}/artistID/${this.props.match.params.artistID}`
    )
    this.setState({ artist: res.data.artist.name })
    this.setState({ artistID: res.data.artist._id })
    this.setState({ genre: res.data.artist.genre })
  }

  handleChangeName = async (e) => {
    await this.setState({ name: e.target.value })
  }

  handleChangeAlbum = async (e) => {
    await this.setState({ album: e.target.value })
  }

  handleChangeCoverArt = async (e) => {
    await this.setState({ coverArt: e.target.value })
  }

  handleChangeDescription = async (e) => {
    await this.setState({ description: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <div className="add-info">Tell us a little about this song!</div>
          <h3> What's it called?</h3>
          <TextInput
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            name={'name'}
            placeholder={'Song Name'}
          />
          <h3> What album is it from? </h3>
          <TextInput
            type="text"
            value={this.state.album}
            onChange={this.handleChangeAlbum}
            name={'name'}
            placeholder={'Album'}
          />
          <h3>Give us a link to the Cover Art!</h3>
          <TextInput
            type="text"
            value={this.state.coverArt}
            onChange={this.handleChangeCoverArt}
            name={'name'}
            placeholder={'Link'}
          />
          <h3>Tell us a little about it!</h3>
          <BigTextInput
            type="text"
            value={this.state.description}
            onChange={this.handleChangeDescription}
            name={'description'}
            placeholder={'Enter description here...'}
          />
          <div>
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSongPage
