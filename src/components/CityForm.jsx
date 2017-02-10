import React, {Component} from 'react'

class CityForm extends Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }
  onChange(e) {
    this.setState({
      city: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
    let city = this.state.city
    this.props.onSubmitCity(city)
    this.setState({
      city: ''
    })
  }
  render() {
    return (
      <div className='cityForm'>
        <h2>Enter City Here</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            onChange={e => this.onChange(e)}
            value={this.state.city} />
        </form>
      </div>
    )
  }
}

export default CityForm
