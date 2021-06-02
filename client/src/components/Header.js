import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">
            <img src="https://i.imgur.com/DTvL4Da.png" />
          </NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
