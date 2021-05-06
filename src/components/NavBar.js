import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class NavBar extends Component {
     
     render(){
         return(
            <div>
        <nav class="navbar navbar-dark bg-primary">
            <Link to={"/"} class="navbar-brand">WikiCountries</Link>
        </nav>
      </div>
         )
     }
    
}

export default NavBar