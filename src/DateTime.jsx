import React, { Component } from 'react'
import './stylesheets/Header.css'

class DateTime extends Component {
  render () {
    return (
      <div>
        <p>{new Date().toDateString()}</p>
      </div>
    )
  }
}

export default DateTime
