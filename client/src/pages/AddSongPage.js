import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import TextInput from '../components/TextInput'

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
    console.log(this.state)
  }

  handleChangeName = async (e) => {
    await this.setState({ name: e.target.value })
  }

  handleChangeAlbum = async (e) => {
    await this.setState({ Album: e.target.value })
  }

  handleChangeCoverArt = async (e) => {
    await this.setState({ coverArt: e.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <h1>Tell us a little about this song!</h1>
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
          <TextInput
            type="text"
            value={this.state.coverArt}
            onChange={this.handleChangeCoverArt}
            name={'name'}
            placeholder={'Link'}
          />
        </form>
      </div>
    )
  }
}

export default AddSongPage
