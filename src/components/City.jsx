import React, {Component} from 'react'

class City extends Component {
  render() {
    let {name, numEntered} = this.props.city
    return (
      <div className='city'>
        {name}: {numEntered}
      </div>
    )
  }
}

export default City
