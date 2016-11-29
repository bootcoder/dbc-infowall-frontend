import React, { Component } from 'react'

import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardFooter from './CardFooter'

import Col from 'react-bootstrap/lib/Col'

import './stylesheets/Card.css'

class EventCard extends Component {
  render () {
    // console.log(this.props.cardData)
    // console.log('in EventCard')
    const cardData = this.props.cardData
    return (
      <Col xs={12} md={3} className='Card sb-dark no-pad gray-text relative-div rounded-corners rounded-bottom'>
        <CardTitle title={cardData.title} />
        <CardDescription description={cardData.description} />
        <CardFooter cardData={cardData} />
      </Col>
    )
  }
}

EventCard.propTypes = {
  cardData: React.PropTypes.shape({
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
