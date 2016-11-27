import React, { Component } from 'react'

class CardTitle extends Component {
  render () {
    const title = this.props.title
    return (
      <div className='CardTitle text-white text-center'>
        <h4>{title}</h4>
      </div>
    )
  }
}

CardTitle.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default CardTitle
