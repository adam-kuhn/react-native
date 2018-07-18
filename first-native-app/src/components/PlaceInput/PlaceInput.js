import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class PlaceInput extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({
      placeName: event
    })
  }

  placeSubmit = () => {
    this.props.handleSubmit(this.state.placeName)
  }
  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An Awesome Place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}/>
        <Button title="Add" style={styles.placeButton}
          onPress={this.placeSubmit} />
      </View>
    )
  }
}

export default PlaceInput

const styles = StyleSheet.create({
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
