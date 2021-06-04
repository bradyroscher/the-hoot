import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BigTextInput from '../components/TextInput'

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
    await axios.delete(
      `${BASE_URL}/${this.props.commentType}-delete/${this.props.id}`
    )
  }

  editComment = async (res, req) => {
    res = await axios.put(
      `${BASE_URL}/edit-${this.props.commentType}/${this.props.id}`,
      {
        text: this.state.text,
        songID: this.props.songID
      }
    )
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
        <div className="comment-card">
          <div className="comment">{this.props.text}</div>
          <div className="comment-buttons">
            <button className="comment-button" onClick={this.handleEdit}>
              Edit
            </button>
            <button className="comment-button" onClick={this.handleClickDelete}>
              Delete
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="comment-card">
        <form onSubmit={this.handleClick}>
          <BigTextInput
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            name={'comment'}
          />
          <div className="comment-buttons">
            <button className="comment-button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentCard
