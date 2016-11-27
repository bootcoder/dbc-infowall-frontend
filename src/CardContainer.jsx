import React, { Component } from 'react'

import './stylesheets/CardContainer.css'

class CardContainer extends Component {
  render () {
    console.log(this.props)
    console.log('in CardContainer')
    const getNames = function () {
      return 'I can call a function'
    }
    return (
      <div className='CardContainer gray-bg full-screen-height'>
        <p>Hello From the card container</p>
        <p>{getNames()}</p>
      </div>
    )
  }
}

CardContainer.propTypes = {
  events: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    organizer: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    img_url: React.PropTypes.string.isRequired,
    card_type: React.PropTypes.string.isRequired,
    source_id: React.PropTypes.string.isRequired,
    schedule: React.PropTypes.string.isRequired
  })
}

export default CardContainer
