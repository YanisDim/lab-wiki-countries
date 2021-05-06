import React, { Component } from 'react';
import axios from 'axios'

class CountryDetails extends Component {
    state = {
        countryDetail : null
    }

    getData(){
        let countryid = this.props.match.params.alpha3Code
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryid}`)
        .then((response) => {
            const {name, alpha3code} = response.data
            let detail={
                name : response.data.name,
                capital: response.data.capital,
                area: response.data.area,
                id: this.props.match.params.alpha3Code
            }
            this.setState({countryDetail: detail})
        }).catch((err) => {
            console.log('error')
        });
    }

    componentDidMount(){
        this.getData()
        
    }

    componentDidUpdate(){
        let stateId = this.state.countryDetail.alpha3Code
        let propsId = this.props.match.params.alpha3Code
        if(stateId !== propsId){
                this.getData()
        }
    }



  render() {
      const {countryDetail} = this.state
      console.log(this.state)
      if(!countryDetail){
          return <h1>...Loading</h1>
      }
    return(
        
        <div>
            <h1>Country Detail</h1>
            <h4>Name: {countryDetail.name}</h4>
            <p>Capital: {countryDetail.capital}</p>
            <p>area: {countryDetail.area}</p>
        </div>
    )
  }
}

export default CountryDetails;
