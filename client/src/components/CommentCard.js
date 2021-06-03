import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import TextInput from '../components/TextInput'

class CommentCard extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      editing: false
    }
  }

  componentDidMount() {
    console.log(this.props.songID)
    this.setState({ text: this.props.text })
  }

  deleteSong = async () => {
    await axios.delete(`${BASE_URL}/comment-delete/${this.props.id}`)
  }

  editComment = async (res, req) => {
    res = await axios.put(`${BASE_URL}/edit-comment/${this.props.id}`, {
      text: this.state.text,
      songID: this.props.songID
    })
    this.props.getComment()
  }

  handleClickDelete = () => {
    this.deleteSong()
    this.props.getComment()
  }

  handleChange = async (e) => {
    await this.setState({ text: e.target.value })
  }

  handleClick = async (e) => {
    e.preventDefault()
    this.editComment()
    this.handleEdit()
  }

  handleEdit = () => {
    if (!this.state.editing) {
      this.setState({ editing: true })
      return
    }
    this.setState({ editing: false })
  }

  render() {
    const editing = this.state.editing
    if (!editing) {
      return (
        <div>
          <div>{this.props.text}</div>
          <div>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleClickDelete}>Delete</button>
          </div>
        </div>
      )
    }
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <TextInput
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            name={'comment'}
          />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default CommentCard
