import React, { Component } from 'react'

class GenrePage extends Component {
  render() {
    console.log(this.props.genres)
    return (
      <div>
        {this.props.genres.map((genre, index) => (
          <div
            onClick={() => this.props.history.push(`/artist/${genre.name}`)}
            key={index}
          >
            {genre.name}
            <img src={genre.img} alt="GENRE" />
          </div>
        ))}
      </div>
    )
  }
}

export default GenrePage
