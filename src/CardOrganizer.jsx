import React, { Component } from 'react'

import CardLocation from './CardLocation'

class CardOrganizer extends Component {
  render () {
    const organizer = this.props.cardData.organizer
    const location = this.props.cardData.location
    return (
      <div className='pad-top-5px black-text text-center'>
        <CardLocation location={location} />
        <p className='bold day-text no-bottom-margin pad-top-5px'>{organizer}</p>
      </div>
    )
  }
}

CardOrganizer.propTypes = {
  cardData: React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    organizer: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    img_url: React.PropTypes.string,
    card_type: React.PropTypes.string,
    source_id: React.PropTypes.string,
    schedule: React.PropTypes.string
  })
}


export default CardOrganizer
