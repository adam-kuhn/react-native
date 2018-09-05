import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, ScrollView,
  Image} from 'react-native'
import {connect} from 'react-redux'

import {addPlace} from '../../../store/actions/index'
import DefaultInput from '../../../components/UI/Defaultinput'
import MainText from '../../../components/UI/MainText'
import HeadingText from '../../../components/UI/HeadingText'
import imagePreview from '../../../assets/cool-poke.jpg'

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
          <MainText>
            <HeadingText>Share a place!</HeadingText>
          </MainText>
          <View style={styles.placeHolder}>
            <Image source={imagePreview} style={styles.previewImage}/>
          </View>
          <View style={styles.button}>
            <Button title='Pick Image' />
          </View>
          <View style={styles.placeHolder}>
            <Text>Map</Text>
          </View>
          <View style={styles.button}>
            <Button title='Locate Me' />
          </View>
          <DefaultInput placeholder='Place Name' />
          <View style={styles.button}>
            <Button title='Share the Place!' />
          </View>
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
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen)
