import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
const placeDetail = props => {
  let modalContent = null
  if (props.selectedPlace) {
    modalContent = (
      <View>
        {/* images loaded over the internet must be styled */}
        <Image style={styles.placeImage} source={props.selectedPlace.image}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    //  animationType='fade' another option. 'none' is default
    // onRequestClose is required to close a modal on Andriod and TV
    <Modal onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null} animationType='slide'>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
          <Button title='close' onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
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
export default placeDetail
