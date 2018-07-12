// allows to not right React.Component for extends ...
import React, {Component} from 'react'
import {connect} from 'react-redux'
// react-native is a bunch of components that will be compiled to native code (browsers don't understnat these, and native applications don't understand <div> etc.,)
import {StyleSheet, View} from 'react-native'

import List from './src/components/List/List'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'
// import placeImage from './src/assets/cool-poke.jpg'
class App extends Component {
state = {
  placeName: '',
  places: [],
  selectedPlace: null
}

  placeNameChangedHandler = (event) => {
    this.setState({
      placeName: event
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return
    }
    this.props.onAddPlace(this.state.placeName)
  }
  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }
  placeSelected = (key) => {
    this.props.onSelectPlace(key)
  }

  render () {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}/>
        <PlaceInput handleChange={this.placeNameChangedHandler}
          handleSubmit={this.placeSubmitHandler}
          name={this.placeName} />
        <List listOfPlaces={this.props.places} onItemSelected={this.placeSelected}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
