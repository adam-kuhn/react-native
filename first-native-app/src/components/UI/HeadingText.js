import React from 'react'
import {Text, StyleSheet} from 'react-native'

const headingText = (props) => {
  return (
    // props.children simply refers to what is between the Open and Closing Tags of the parent component
    <Text {...props} style={[style.textHeader, props.style]} >{props.children}</Text>
  )
}

const style = StyleSheet.create({
  // text styling can only be applied to text fields, i.e. can not be used on View
  textHeader: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default headingText
