import React, { Component } from 'react'

import CardTitle from './CardTitle'

class EventCard extends Component {
  render () {
    console.log(this.props.eventData)
    console.log('in EventCard')
    const eventData = this.props.eventData
    return (
      <div className='EventCard'>
        <CardTitle title={eventData.title} />
        <p>{eventData.description}</p>
      </div>
    )
  }
}

EventCard.propTypes = {
  eventData: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    organizer: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    img_url: React.PropTypes.string.isRequired,
    card_type: React.PropTypes.string.isRequired,
    source_id: React.PropTypes.string.isRequired,
    schedule: React.PropTypes.string.isRequired
  })
}

export default EventCard
