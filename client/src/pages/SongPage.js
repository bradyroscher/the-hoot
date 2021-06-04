import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BigTextInput from '../components/BigTextInput'
import CommentCard from '../components/CommentCard'

class SongPage extends Component {
  constructor() {
    super()
    this.state = {
      song: [],
      comments: [],
      value: '',
      songID: ''
    }
  }

  componentDidMount() {
    this.getSong()
    this.getComment()
  }

  getSong = async () => {
    const res = await axios.get(
      `${BASE_URL}/songID/${this.props.match.params.id}`
    )
    this.setState({ song: res.data.song })
    this.setState({ songID: this.state.song._id })
    console.log(this.state.songID)
  }

  getComment = async () => {
    const res = await axios.get(
      `${BASE_URL}/song-comments/song/${this.props.match.params.id}`
    )
    console.log(this.props.match.params.id)
    console.log(res.data)
    this.setState({ comments: res.data })
  }

  postComment = async (res, req) => {
    res = await axios.post(`${BASE_URL}/song-comments/add`, {
      text: this.state.value,
      songId: this.state.song._id
    })
    this.getComment()
    this.setState({ value: '' })
    console.log('fired')
  }

  handleClick = async (e) => {
    e.preventDefault()
    this.postComment()
  }

  handleChange = async (e) => {
    await this.setState({ value: e.target.value })
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <img src={this.state.song.coverArt} />
        <div>
          {this.state.song.name} | {this.state.song.genre}{' '}
        </div>
        <div className="info">{this.state.song.description}</div>
        <div className="comments">
          {this.state.comments.map((comment, index) => (
            <CommentCard
              key={index}
              text={comment.text}
              id={comment._id}
              songID={this.props.match.params.id}
              getComment={this.getComment}
              commentType="comment"
            />
          ))}
        </div>
        <form className="comment-form" onSubmit={this.handleClick}>
          <BigTextInput
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            name={'comment'}
            placeholder={'comment'}
          />
          <div className="hoot-holder">
            <button className="comment-button">Post</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SongPage
