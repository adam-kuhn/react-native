import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native'
import {connect} from 'react-redux'

import {addPlace} from '../../../store/actions/index'
class SharePlaceScreen extends Component {
  // toggle drawer code below ---
  constructor (props) {
    super(props)
    // navigator event listener
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }
  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          // this prop is needed to avoid erros on android'
          side: 'left'
        })
      }
    }
  }
  // toggle drawer code above ^^^^

  placeAddedHandler = (placeName) => {
    if (placeName.trim() === '') {
      return
    }
    this.props.onAddPlace(placeName)
  }
  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Share a place!</Text>
          <View style={styles.placeHolder}><Text>Image Preview</Text></View>
          <Button title='Pick Image' />
          <View style={styles.placeHolder}><Text>Map</Text></View>
          <Button title='Locate Me' />
          <TextInput placeholder='Place Name' />
          <Button title='Share the Place!' />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen)
