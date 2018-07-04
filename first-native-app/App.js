// allows to not right React.Component for extends ...
import React, {Component} from 'react'
// react-native is a bunch of components that will be compiled to native code (browsers don't understnat these, and native applications don't understand <div> etc.,)
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      placeName: '',
      places: []
    }
    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this)
    this.placeSubmitHandler = this.placeSubmitHandler.bind(this)
  }
  placeNameChangedHandler (event) {
    this.setState({
      placeName: event
    })
  }

  placeSubmitHandler () {
    if (this.state.placeName.trim() === '') {
      return
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  render () {
    const placesOutput = this.state.places.map((place, i) => {
      return (
        <Text key={i}>{place}</Text>
      )
    })
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}/>
          <Button title="Add" style={styles.placeButton}
            onPress={this.placeSubmitHandler} />
        </View>
        <View>
          {placesOutput}
        </View>
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
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
})
