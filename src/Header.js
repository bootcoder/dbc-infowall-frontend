import React, { Component } from 'react'
import './stylesheets/Header.css'
import Col from 'react-bootstrap/lib/Col'
import Clock from 'react-clock'
import DateTime from './DateTime'

class Header extends Component {
  render () {
    return (
      <nav className='navbar-inverse'>
        <div className=''>
          <div className='row'>
            <Col xs={1} md={4}>
              <img className='navbar-logo' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
            </Col>
            <Col xs={1} md={4} className='white-text center-text'>
              <Clock />
            </Col>
            <Col xs={1} md={4} className='white-text center-text'>
              <DateTime />
            </Col>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
