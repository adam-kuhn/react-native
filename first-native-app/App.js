// allows to not right React.Component for extends ...
import React, {Component} from 'react'
// react-native is a bunch of components that will be compiled to native code (browsers don't understnat these, and native applications don't understand <div> etc.,)
import {StyleSheet, View} from 'react-native'

import List from './src/components/List/List'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
// import placeImage from './src/assets/cool-poke.jpg'
export default class App extends Component {
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
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          // when image is imported it stored as a JS object that can be rendered on the app, not just a path
          // image: placeImage
          image: {
            // image address
            // images loaded over the internet must be styled
            uri: 'https://www.planwallpaper.com/static/images/Cool-HD-Wallpapers-1_9j9pfu8.jpg'
          }
        })
      }
    })
  }
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }
  placeSelected = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}/>
        <PlaceInput handleChange={this.placeNameChangedHandler}
          handleSubmit={this.placeSubmitHandler}
          name={this.placeName} />
        <List listOfPlaces={this.state.places} onItemSelected={this.placeSelected}/>
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
