import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="header">
          <NavLink to="/">
            <img
              className="header-image"
              src="https://i.imgur.com/bpoo3zJ.png"
              alt="OWL"
            />
          </NavLink>
          <h1 className="the-hoot">The Hoot</h1>
          <NavLink to="/search">
            <img
              className="header-image"
              src="https://i.imgur.com/DTvL4Da.png"
              alt="SEARCH"
            />
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Header
