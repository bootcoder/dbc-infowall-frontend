import React, { Component } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <CardContainer />
      </div>
    )
  }
}

export default App
