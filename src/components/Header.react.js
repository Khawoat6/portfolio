import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    )
  }
}

export default Header;
