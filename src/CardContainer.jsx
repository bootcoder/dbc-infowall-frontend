import React, { Component } from 'react'

class CardContainer extends Component {
  render () {
    const getNames = function () {
      return 'My Name is function'
    }
    return (
      <div className='CardContainer'>
        <p>Hello From the card container</p>
        <p>{getNames()}</p>
      </div>
    )
  }
}

export default CardContainer
