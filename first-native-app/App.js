// allows to not right React.Component for extends ...
import React, {Component} from 'react'
// react-native is a bunch of components that will be compiled to native code (browsers don't understnat these, and native applications don't understand <div> etc.,)
import {StyleSheet, Text, View} from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>My first app!</Text>
        <Text>hey</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
