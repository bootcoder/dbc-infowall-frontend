import React, { Component } from 'react'

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