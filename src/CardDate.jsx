import React, { Component } from 'react'

import Col from 'react-bootstrap/lib/Col'

class CardDate extends Component {
  giveDay (dateString) {
    return dateString.slice(0, 3)
  }

  giveDate (dateString) {
    return dateString.slice(4, 10)
  }

  giveTime (dateString) {
    return dateString.slice(11, 16)
  }

  formatDateTime (date_input) {
    let date = new Date(date_input).toDateString()
    let time = new Date(date_input).toTimeString()
    return date.substr(0, date.length - 4) + time.substr(0, time.length - 18)
  }

  render () {
    const schedule = this.props.schedule
    return (
      <div className='pad-top-5px black-text'>
        <p className='bold day-text no-bottom-margin'>{this.giveDay(this.formatDateTime(schedule))}</p>
        <p className='bold day-text no-bottom-margin'>{this.giveTime(this.formatDateTime(schedule))}</p>
        <p className='bold date-text no-bottom-margin'>{this.giveDate(this.formatDateTime(schedule))}</p>
      </div>
    )
  }
}

CardDate.propTypes = {
  schedule: React.PropTypes.string.isRequired
}

export default CardDate
