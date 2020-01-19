import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Chips'>Chips</NavLink>
        <NavLink to='/Sardines'>Sardines</NavLink>
        <NavLink to='/Soda'>Soda</NavLink>
      </div>
    )
  }
}

export default Navbar