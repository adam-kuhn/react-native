import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
const defaultInput = (props) => (
  <TextInput

    underlineColorAndroid="transparent"
    // spread operator allows us to pass any prop in that is not already defined in this component. VERY COOL!
    {...props}
    // able to accept new styles, and merge default styles. This array must be below the {...props} to work
    // array overrides in order
    style={[styles.input, props.style]}
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
