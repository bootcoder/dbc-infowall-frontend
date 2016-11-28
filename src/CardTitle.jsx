import React, { Component } from 'react'

class CardTitle extends Component {
  render () {
    const title = this.props.title
    return (
      <div className='CardTitle text-center text-teal'>
        <h5>{title}</h5>
      </div>
    )
  }
}

CardTitle.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default CardTitle
