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
    this.setState({ artists: res })
    console.log(this.state.artists)
  }

  render() {
    return <div></div>
  }
}

export default ArtistList
