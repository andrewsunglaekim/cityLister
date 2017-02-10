import React, {Component} from 'react'
import City from './City.jsx'

class CitiesList extends Component {
  render(){
    let cities = this.props.cities.sort((a, b) => {
      return b.numEntered - a.numEntered
    })
    cities = cities.map((city, i) => {
      return (
        <div key={i}>
          <City city={city} />
        </div>
      )
    })
    console.log(cities)
    return(
      <div>
        {cities}
      </div>
    )
  }
}

export default CitiesList
