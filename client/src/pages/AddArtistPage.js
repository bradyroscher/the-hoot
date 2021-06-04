import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BigTextInput from '../components/BigTextInput'

class AddArtistPage extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      img: '',
      topSong: '',
      description: ''
    }
  }

  postArtist = async (res, req) => {
    res = await axios.post(`${BASE_URL}/artist`, {
      name: this.state.name,
      img: this.state.img,
      genre: this.props.match.params.genre,
      topSong: this.state.topSong,
      description: this.state.description
    })
    this.props.history.push('/')
  }

  handleClick = (e) => {
    e.preventDefault()
    this.postArtist()
  }

  handleChangeName = async (e) => {
    await this.setState({ name: e.target.value })
  }

  handleChangeImg = async (e) => {
    await this.setState({ img: e.target.value })
  }

  handleChangeTopSong = async (e) => {
    await this.setState({ topSong: e.target.value })
  }

  handleChangeDescription = async (e) => {
    await this.setState({ description: e.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <h1>Tell us about you're artist!</h1>
          <h3> What's their name?</h3>
          <TextInput
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            name={'name'}
            placeholder={'Artist Name'}
          />
          <h3>Show us what they look like!</h3>
          <TextInput
            type="text"
            value={this.state.img}
            onChange={this.handleChangeImg}
            name={'img'}
            placeholder={'Link'}
          />
          <h3>What's their best song we should check out?</h3>
          <TextInput
            type="text"
            value={this.state.topSong}
            onChange={this.handleChangeTopSong}
            name={'topSong'}
            placeholder={'Song'}
          />
          <h3>Tell us a little about them!</h3>
          <BigTextInput
            type="text"
            value={this.state.description}
            onChange={this.handleChangeDescription}
            name={'description'}
            placeholder={'Enter description here...'}
          />
          <div>
            <button>Submit!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddArtistPage
