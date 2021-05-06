import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import CountryDetails from './CountryDetails'

class CountriesList extends Component {
    state = {
        countries: []
    }
      componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            this.setState({
                countries: response.data
            })
        }).catch((err) => {
            console.log('Error')    
        });
    }

    

    render() {
        const {countries} = this.state
        if(!countries.length){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <div>
          {
            countries.map((country,i)=>{
              return(
                <div>
                  <Link to={country.alpha3Code}>{country.name}</Link>
                </div>
              )
            })
          }
          <Route path="/:alpha3Code" component={CountryDetails}/>
        </div>
            </div>
        )
    }
}

export default CountriesList