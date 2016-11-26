import React, { Component } from 'react'
import './stylesheets/Header.css'
const Clock = require('react-clock')

class Header extends Component {
  render () {
    return (
      <header className='Header'>
        <div className='header-container'>
          <img className='header-element header-logo' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
          <div className='header-element header-clock'>
            <Clock />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
