import React, { Component } from 'react'

import Col from 'react-bootstrap/lib/Col'

class CardImage extends Component {
  render () {
    const img_url = this.props.img_url
    return (
      <img className='circle-60px pull-right' src={require('./images/staff/' + img_url)} alt='staff-headshot' />
    )
  }
}

CardImage.propTypes = {
  img_url: React.PropTypes.string.isRequired
}

export default CardImage
