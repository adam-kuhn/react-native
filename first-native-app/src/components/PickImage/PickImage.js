import React from 'react'
import {View, Image, Button, StyleSheet} from 'react-native'

import imagePreview from '../../assets/cool-poke.jpg'

class PickImage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.placeHolder}>
          <Image source={imagePreview} style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <Button title='Pick Image' onPress={() => alert('CLICKLYE')} />
        </View>
      </View>
    )
  }
}

export default PickImage

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
