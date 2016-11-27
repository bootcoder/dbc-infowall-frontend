import React, { Component } from 'react'
import Fetch from 'react-fetch'

import Header from './Header'
import CardContainer from './CardContainer'

import './stylesheets/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Fetch url='https://dbc-infowall-api.herokuapp.com'>
          <CardContainer />
        </Fetch>
      </div>
    )
  }
}

export default App
