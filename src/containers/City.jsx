import React, {Component} from 'react'
import CityForm from '../components/CityForm.jsx'
import CitiesList from '../components/CitiesList.jsx'

class City extends Component {
  constructor(){
    super()
    this.state = {
        cities: [
          {name: "baltimore", numEntered: 2},
          {name: "New York", numEntered: 1},
          {name: "Richmond", numEntered: 3}
        ]
    }
  }
  submitCity(city) {
    let newCities;
    if(this.findCity(city)){
      let selectedCity = this.findCity(city)
      let cityIndex = this.state.cities.indexOf(selectedCity)
      newCities = this.state.cities
      newCities[cityIndex].numEntered++
    } else {
      newCities = this.state.cities
      newCities.push({
        name: city,
        numEntered: 1
      })
    }
    this.setState({
      cities: newCities
    })
  }
  findCity(cityName){
    return this.state.cities.find((city) => {
      return city.name === cityName
    })
  }
  render() {
    return (
      <main>
        <CityForm
           onSubmitCity={this.submitCity.bind(this)} />
         <CitiesList
           cities={this.state.cities} />

      </main>


    )
  }

}

export default City
