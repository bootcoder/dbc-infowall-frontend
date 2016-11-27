import React, { Component } from 'react'

class CardFooter extends Component {
  render () {
    console.log(this.props.eventData)
    console.log('in CardFooter')
    const eventData = this.props.eventData
    return (
      <div className='CardFooter'>
        <p>{eventData.schedule}</p>
        <p>{eventData.organizer}</p>
        <img className='img-headshot' src={require('./images/staff/' + eventData.img_url)} alt='staff-headshot' />
      </div>
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
