import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class CommentCard extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  deleteSong = async () => {
    await axios.delete(`${BASE_URL}/song-delete/${this.props.id}`)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default CommentCard
