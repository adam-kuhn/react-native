import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

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
          <Button title='delete' color='red' onPress={props.onItemDeleted}/>
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
  }
})
export default placeDetail
