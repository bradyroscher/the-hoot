import React, { Component } from 'react'

class GenrePage extends Component {
  render() {
    console.log(this.props.genres)
    return (
      <div>
        <h1>Click on a Genre below to start exploring!</h1>
        <h1>
          Or do you have something in mind? Click on the search icon in the top
          right!
        </h1>
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
      </div>
    )
  }
}

export default GenrePage
