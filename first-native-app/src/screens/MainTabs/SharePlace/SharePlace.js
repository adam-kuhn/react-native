import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

import PlaceInput from '../../../components/PlaceInput/PlaceInput'
import {addPlace} from '../../../store/actions/index'
class SharePlaceScreen extends Component {
  // toggle drawer code below ---
  constructor (props) {
    super(props)
    // navigator event listener
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }
  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          // this prop is needed to avoid erros on android'
          side: 'left'
        })
      }
    }
  }
  // toggle drawer code above ^^^^

  placeAddedHandler = (placeName) => {
    if (placeName.trim() === '') {
      return
    }
    this.props.onAddPlace(placeName)
  }
  render () {
    return (
      <View>
        <PlaceInput handleSubmit={this.placeAddedHandler}/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen)
