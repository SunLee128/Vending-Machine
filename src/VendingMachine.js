import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VendingMachine extends Component {
  render() {
    return (
      <div>
        VendingMachine
        <Link to='/soda'>Soda</Link>
        <Link to='/chips'>Chips</Link>
        <Link to='/Sardines'>Sardines</Link>
      </div>
    )
  }
}

export default VendingMachine