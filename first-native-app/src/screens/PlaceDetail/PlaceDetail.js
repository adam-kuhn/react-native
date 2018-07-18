import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {deletePlace} from '../../store/actions/index'

import Icon from 'react-native-vector-icons/Ionicons'
class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    // navaigator.pop() is like a back button, navigate to the previous screen
    // popToRoot() is way to navigate back through many screens to a 'home' screen
    this.props.navigator.pop()
  }
  render () {
    return (
      <View style={styles.container}>
        <View>
          {/* images loaded over the internet must be styled */}
          <Image style={styles.placeImage} source={this.props.selectedPlace.image}/>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}
export default connect(null, mapDispatchToProps)(PlaceDetail)
