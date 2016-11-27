import React, { Component } from 'react'

import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardFooter from './CardFooter'

import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

import './stylesheets/Card.css'

class EventCard extends Component {
  render () {
    console.log(this.props.eventData)
    console.log('in EventCard')
    const eventData = this.props.eventData
    return (
      <Col xs={1} md={3} className='EventCard Card'>
        <CardTitle title={eventData.title} />
        <CardDescription description={eventData.description} />
        <CardFooter eventData={eventData} />
      </Col>
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
