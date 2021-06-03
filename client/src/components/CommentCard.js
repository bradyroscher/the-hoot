import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

class CommentCard extends Component {
  constructor() {
    super()
    this.state = {
      text: this.props.text,
      songID: this.props.songID
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  deleteSong = async () => {
    await axios.delete(`${BASE_URL}/comment-delete/${this.props.id}`)
  }

  updateComment = async (res, req) => {
    res = await axios.post(`${BASE_URL}/edit-comment/${this.props.id}`, {
      text: this.state.text,
      songID: this.props.songID
    })
    this.getComment()
  }

  handleClickDelete = () => {
    this.deleteSong()
    this.props.getComment()
  }

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <div>
          <button>Edit</button>
          <button onClick={this.handleClickDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default CommentCard
