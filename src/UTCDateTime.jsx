import React, { Component } from 'react'

class DateTime extends Component {
  render () {
    return (
      <div>
        <p>{new Date().toString()}</p>
      </div>
    )
  }
}

export default DateTime
