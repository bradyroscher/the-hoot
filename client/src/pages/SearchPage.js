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
    res = await axios.get(`${BASE_URL}/song/name/${this.state.search}`)
    console.log(res)
  }

  getArtistResults = async (res, req) => {
    res = await axios.get(`${BASE_URL}/artist/name/${this.state.search}`)
    console.log(res.data)
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
      </div>
    )
  }
}

export default SearchPage
