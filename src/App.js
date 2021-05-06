import axios from 'axios'
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import {Route} from 'react-router-dom'

import React, { Component } from 'react'

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <NavBar />
        <div className="container">
    <div className="row">
        <CountriesList />
        <Route path="/:alpha3Code" component={CountryDetails}/>
        </div>
      </div>
      </div>
    )
  }
}
export default App;
