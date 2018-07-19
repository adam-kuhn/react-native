import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

import List from '../../../components/List/List'
class FindPlaceScreen extends Component {
  // toggle drawer code below ---
  constructor (props) {
    super(props)
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
  itemSelectedHandler = (key) => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })
    // push is a built in function that pushes the desired screen to the front, so it is display (like history.push() in browser)
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      // passProps mergers to our props
      passProps: {
        selectedPlace: selPlace
      }
    })
  }
  render () {
    return (
      <View>
        <List listOfPlaces={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen)
