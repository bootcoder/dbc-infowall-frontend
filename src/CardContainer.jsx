import React, { Component } from 'react'
import './stylesheets/CardContainer.css'

class CardContainer extends Component {
  render () {
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

export default CardContainer
