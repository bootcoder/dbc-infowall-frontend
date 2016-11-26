import React, { Component } from 'react'
import './stylesheets/Header.css'
const Clock = require('react-clock')

class Header extends Component {
  render () {
    return (
      <header className='Header'>
        <div classname='header-container'>
          <img className='brand-logo header-element float-left' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
          <div className='header-clock float'>
            <Clock />
          </div>
          <img className='brand-logo header-element float-right' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
        </div>
      </header>
    )
  }
}

export default Header
