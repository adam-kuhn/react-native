import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
const defaultInput = (props) => (
  <TextInput
    style={styles.input}
    underlineColorAndroid="transparent"
    // spread operator allows us to pass any prop in that is not already defined in this component. VERY COOL!
    {...props}
  />
)

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8
  }
})

export default defaultInput
