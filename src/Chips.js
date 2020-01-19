import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Chips extends Component {
  render() {
    return (
      <div>
        Chips
        <Link to='/'>Go back</Link>
      </div>
    )
  }
}

export default Chips