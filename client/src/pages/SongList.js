import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CommentCard from '../components/CommentCard'
import BigTextInput from '../components/BigTextInput'

class SongList extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      artistImg: '',
      artistDescription: '',
      comments: [],
      value: '',
      artistID: '',
      artistName: ''
    }
  }

  componentDidMount() {
    this.getSongs()
    this.getArtist()
    this.getComment()
    console.log(this.props)
  }

  getSongs = async () => {
    const res = await axios.get(
      `${BASE_URL}/song/${this.props.match.params.artistID}`
    )
    this.setState({ songs: res.data })
  }

  getArtist = async () => {
    const res = await axios.get(
      `${BASE_URL}/artistID/${this.props.match.params.artistID}`
    )
    this.setState({ artistImg: res.data.artist.img })
    this.setState({ artistDescription: res.data.artist.description })
    this.setState({ artistName: res.data.artist.name })
  }

  getComment = async () => {
    const res = await axios.get(
      `${BASE_URL}/artist-comments/artist/${this.props.match.params.artistID}`
    )
    console.log(this.props)
    console.log(res.data)
    this.setState({ comments: res.data })
  }

  postComment = async (res, req) => {
    res = await axios.post(`${BASE_URL}/artist-comments/add`, {
      text: this.state.value,
      artistId: this.props.match.params.artistID
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
      <div className="song-list">
        <div>
          <div className="title-name">{this.state.artistName}</div>
          <img className="artist-page-image" src={this.state.artistImg} />
          <div className="info">{this.state.artistDescription}</div>
          <div className="song-display">
            {this.state.songs.map((song, index) => (
              <div
                key={index}
                onClick={() => this.props.history.push(`/songID/${song._id}`)}
                className="song-card"
              >
                <div className="name">{song.name}</div>
                <img className="song-image" src={song.coverArt} />
              </div>
            ))}
          </div>
        </div>
        <div className="center">
          <div
            onClick={() =>
              this.props.history.push(
                `/song-add/${this.props.match.params.artistID}`
              )
            }
            className="add-redirect"
          >
            Don't see you're favorite song by this artist? Add it!
          </div>
        </div>
        <div className="center">
          <div className="comments-title">Comment Section</div>
        </div>
        <div className="comments">
          {this.state.comments.map((comment, index) => (
            <CommentCard
              key={index}
              text={comment.text}
              id={comment._id}
              songID={this.props.match.params.artistID}
              getComment={this.getComment}
              commentType="artist-comment"
            />
          ))}
        </div>
        <form className="comment-form" onSubmit={this.handleClick}>
          <BigTextInput
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            name={'comment'}
            placeholder={'Leave a hoot...'}
          />
          <div className="hoot-holder">
            <button className="comment-button">Hoot</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SongList
