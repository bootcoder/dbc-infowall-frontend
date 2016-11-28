import React, { Component } from 'react'

class CardLocation extends Component {
  render () {
    const location = this.props.location
    return (
      <p className='bold day-text no-bottom-margin'>{location}</p>
    )
  }
}

CardLocation.propTypes = {
  location: React.PropTypes.string.isRequired
}

export default CardLocation
