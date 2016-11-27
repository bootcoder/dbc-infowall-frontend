import React, { Component } from 'react'

class CardDescription extends Component {
  render () {
    console.log(this.props.description)
    console.log('in CardDescription')
    const description = this.props.description
    return (
      <div className='CardDescription text-white text-center'>
        <p>{description}</p>
      </div>
    )
  }
}

CardDescription.propTypes = {
  description: React.PropTypes.string
}

export default CardDescription
