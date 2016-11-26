import React, { Component } from 'react'
import './stylesheets/Header.css'

class DateTime extends Component {
  render () {
    return (
      <div>
        {new Date().toDateString()}
      </div>
    )
  }
}

export default DateTime
