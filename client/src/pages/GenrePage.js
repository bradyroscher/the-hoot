import React, { Component } from 'react'

class GenrePage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            padding: '30px'
          }}
        >
          <div className="genre-info">
            <div>Click on a Genre below to start exploring!</div>
            <div>
              Or do you have something in mind? Click on the search icon at the
              top of your screen!
            </div>
          </div>
        </div>
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
