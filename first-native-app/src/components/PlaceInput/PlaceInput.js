import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const PlaceInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An Awesome Place"
      value={props.name}
      onChangeText={props.handleChange}/>
    <Button title="Add" style={styles.placeButton}
      onPress={props.handleSubmit} />
  </View>
)

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
