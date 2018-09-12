import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, ScrollView,
  Image} from 'react-native'
import {connect} from 'react-redux'

import {addPlace} from '../../../store/actions/index'
import MainText from '../../../components/UI/MainText'
import HeadingText from '../../../components/UI/HeadingText'
import PickImage from '../../../components/PickImage/PickImage'
import PlaceInput from '../../../components/PlaceInput/PlaceInput'
import PickLocation from '../../../components/PickLocation/PickLocation'

class SharePlaceScreen extends Component {
  state = {
    placeName: ''
  }
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

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName)
    }
  }

  placeNameChangedHandler = (place) => {
    this.setState({
      placeName: place
    })
  }
  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}/>
          <View style={styles.button}>
            <Button title='Share the Place!' onPress={this.placeAddedHandler} />
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
