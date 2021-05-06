import axios from 'axios'
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import {Route} from 'react-router-dom'

import React, { Component } from 'react'

class App extends Component {
  
  render() {
    
    return (
      <div>
        <NavBar />
        <CountriesList />
        
      </div>
    )
  }
}
export default App;
