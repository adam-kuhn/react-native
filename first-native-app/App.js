// allows to not right React.Component for extends ...
import React, {Component} from 'react'
// react-native is a bunch of components that will be compiled to native code (browsers don't understnat these, and native applications don't understand <div> etc.,)
import {StyleSheet, View} from 'react-native'

import List from './src/components/List/List'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import placeImage from './src/assets/cool-poke.jpg'
export default class App extends Component {
state = {
  placeName: '',
  places: []
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
          image: placeImage
        })
      }
    })
  }
  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key
        })
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <PlaceInput handleChange={this.placeNameChangedHandler}
          handleSubmit={this.placeSubmitHandler}
          name={this.placeName} />
        <List listOfPlaces={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
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
