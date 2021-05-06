import React, { Component } from 'react';
import axios from 'axios'

class CountryDetails extends Component {
    state = {
        countryDetail : null
    }

    getData(){
        axios.get(`https://restcountries.eu/rest/v2/all/`)
        .then((response) => {
            const {name, alpha3code} = response.data
            let detail={
                name : response.data.name,
                alpha3code: response.data.alpha3code
            }
            this.setState({countryDetail: detail})
        }).catch((err) => {
            
        });
    }

    componentDidMount(){
        this.getData()
        
    }




  render() {
    return
  }
}

export default CountryDetails;
