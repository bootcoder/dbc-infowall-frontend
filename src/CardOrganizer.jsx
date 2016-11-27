import React, { Component } from 'react'

import CardLocation from './CardLocation'

class CardOrganizer extends Component {
  render () {
    const organizer = this.props.eventData.organizer
    const location = this.props.eventData.location
    return (
      <div className='text-center bold'>
        <CardLocation location={location} />
        <p className='organizer-text'>{organizer}</p>
      </div>
    )
  }
}

CardOrganizer.propTypes = {
  eventData: React.PropTypes.shape({
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
