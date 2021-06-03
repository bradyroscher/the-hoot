import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="header">
          <NavLink to="/">Home</NavLink>
          <div className="logo">
            <img src="https://i.imgur.com/bpoo3zJ.png" />
            The Hoot
          </div>
          <NavLink to="/search">
            <img src="https://i.imgur.com/DTvL4Da.png" />
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Header
