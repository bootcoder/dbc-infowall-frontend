import React, { Component } from 'react'

import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

import CardDate from './CardDate'
import CardOrganizer from './CardOrganizer'
import CardImage from './CardImage'

class CardFooter extends Component {
  setCardType (card_type) {
    switch (card_type) {
      case 'student':
        return 'bg-yellow'
      case 'calendar':
        return 'bg-gray'
      case 'today':
        return 'bg-light-green'
    }
  }
  render () {
    var props = this.props.eventData
    return (
      <Col sm={12} lg={12} className={this.setCardType(props.card_type) + ' absolute-bottom height-60px rounded-bottom'}>
        <Row>
          <Col sm={3} lg={3} className='black-text'>
            <CardDate schedule={props.schedule} />
          </Col>
          <Col sm={3} lg={6} className='black-text'>
            <CardOrganizer eventData={props} />
          </Col>
          <Col sm={3} lg={3} className='black-text no-pad'>
            <CardImage img_url={props.img_url} />
          </Col>
        </Row>
      </Col>
    )
  }
}

CardFooter.propTypes = {
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

export default CardFooter
