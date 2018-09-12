import React from 'react'

import DefaultInput from '../UI/Defaultinput'

class PlaceInput extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({
      placeName: event
    })
  }

  render () {
    return (
      <DefaultInput placeholder='Place Name'
        value={this.state.placeName}
        onChange={this.placeNameChangedHandler}/>
    )
  }
}

export default PlaceInput
