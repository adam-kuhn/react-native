import React from 'react'

import DefaultInput from '../UI/Defaultinput'

const PlaceInput = (props) => {
  return (
    <DefaultInput placeholder='Place Name'
      value={props.placeName}
      onChangeText={props.onChangeText}/>
  )
}

export default PlaceInput
