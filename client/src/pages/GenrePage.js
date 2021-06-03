import React, { Component } from 'react'

class GenrePage extends Component {
  render() {
    console.log(this.props.genres)
    return (
      <div className="genres">
        {this.props.genres.map((genre, index) => (
          <div
            className="genre"
            onClick={() => this.props.history.push(`/artist/${genre.name}`)}
            key={index}
          >
            {genre.name}
            <img className="genre-logo" src={genre.img} alt="GENRE" />
          </div>
        ))}
      </div>
    )
  }
}

export default GenrePage
