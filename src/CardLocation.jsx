import React, { Component } from 'react'

class CardLocation extends Component {
  render () {
    const location = this.props.location
    return (
      <p className='pad-top-12P location-text'>{location}</p>
    )
  }
}

CardLocation.propTypes = {
  location: React.PropTypes.string.isRequired
}

export default CardLocation
